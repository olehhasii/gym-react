import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

import FormInput from '../formElements/FormInput';
import {
	setActiveExercise,
	setTrainingFinishExercise,
} from '../../redux/actions/trainingSessionActions';
import api from '../../features/api';
import { useTranslation } from 'react-i18next';

const ActiveExercise = () => {
	const dispatch = useDispatch();
	const { activeExercise } = useSelector((state) => state.trainingSession);

	const defaultForm = [];

	for (let index = 0; index < activeExercise.sets; index++) {
		defaultForm.push({ repsDone: '', weightDone: '' });
	}

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			setsDone: defaultForm,
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: 'setsDone',
		control,
		rules: {
			required: 'Please add at least 1 set',
		},
	});

	const selectActiveExercise = () => {
		dispatch(setActiveExercise(null));
	};

	const onSubmit = (data) => {
		const finishedExercise = {
			...activeExercise,
			setsDone: data.setsDone,
			done: true,
		};
		api
			.patch('/training-session/finish-exercise', finishedExercise)
			.then((res) => dispatch(setTrainingFinishExercise(res.data)))
			.catch((err) => console.log(err));
	};

	const { t } = useTranslation();

	return (
		<div>
			<p className='font-bold text-xl lg:text-3xl mt-5'>
				{activeExercise.exerciseName} | {activeExercise.sets}{' '}
				{t('trainings.trainingSession.setsX')} {activeExercise.reps}{' '}
				{t('trainings.trainingSession.repsWith')} {activeExercise.weight} kg
			</p>

			<form onSubmit={handleSubmit(onSubmit)}>
				<p className='mb-4 text-center font-bold '>
					{errors.setsDone?.root?.message}
				</p>
				<div className='flex gap-5 flex-wrap mt-6'>
					{fields.map((field, index) => (
						<div
							className='border border-gray-300 rounded-lg p-4 w-96'
							key={field.id}>
							<p className='font-bold lg:text-xl'>
								{t('trainings.trainingSession.set')} № {index + 1}
							</p>
							<div className='flex gap-4 mt-2 items-center'>
								<FormInput
									type='number'
									placeholder={t('trainings.workoutItem.reps')}
									register={register}
									registerName={`setsDone.${index}.repsDone`}
									width='w-20 md:w-32'
									min={1}
									max={500}
									required={true}
									mb='mb-0'
								/>

								<FormInput
									type='number'
									placeholder={t('trainings.workoutItem.weight')}
									register={register}
									registerName={`setsDone.${index}.weightDone`}
									width='w-20 md:w-32'
									min={1}
									max={500}
									mb='mb-0'
								/>

								{index === fields.length - 1 && (
									<div className='flex gap-2 items-center ml-auto'>
										<button
											onClick={() => append({ repsDone: '', weightDone: '' })}
											className='rounded-full border p-3 border-gray-400 mb-4 cursor-pointer hover:text-green-400 duration-150 hover:scale-110'>
											<FaPlus />
										</button>
										<button
											onClick={() => remove(index)}
											className='w-8 h-8 mb-4 cursor-pointer hover:text-red-400 duration-150 hover:scale-110 text-2xl'>
											<FaTrashAlt />
										</button>
									</div>
								)}
							</div>
						</div>
					))}
				</div>
				<div className='flex gap-4 mt-6 items-center'>
					<button
						type='submit'
						className='text-sm md:text-base text-center border-none outline-none p-2 h-12 bg-green-400 font-bold rounded-lg hover:scale-110 duration-300'>
						{t('trainings.trainingSession.finishExercise')}
					</button>
					<button
						type='button'
						onClick={selectActiveExercise}
						className='text-sm md:text-base border-none outline-none p-2 h-12 bg-blue-300 font-bold rounded-lg hover:scale-110 duration-300'>
						{t('trainings.trainingSession.selectAnotherExercise')}
					</button>
				</div>
			</form>
		</div>
	);
};

export default ActiveExercise;
