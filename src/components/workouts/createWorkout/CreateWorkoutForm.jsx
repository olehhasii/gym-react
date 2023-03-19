import React from 'react';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import api from '../../../features/api';

import FormInput from '../../formElements/FormInput';
import SelectInput from '../../formElements/SelectInput';
import { DAYS_OPTION, MUSCLES_OPTIONS } from '../../../constants/constatns';
import { useTranslation } from 'react-i18next';

const CreateWorkoutForm = () => {
	const [muscleValue, setMuscleValue] = useState([]);
	const [daysValue, setDaysValue] = useState([]);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			exercises: [{ exerciseName: '', sets: '', reps: '', weight: '' }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: 'exercises',
		control,
		rules: {
			required: 'Please add at least 1 exercise',
		},
	});

	const onSubmit = async (data) => {
		const daysOfWorkout = daysValue.map((day) => {
			return day.label;
		});
		const muscleGroups = muscleValue.map((group) => group.label);
		const workout = { ...data, muscleGroups, daysOfWorkout };
		await api.post('/training/new', workout);
		navigate('/workouts');
	};

	const { t } = useTranslation();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
			<div className='flex justify-between gap-4 flex-wrap'>
				{errors.workoutName && (
					<p className='bg-red-400 w-max rounded p-1 mt-4 border-2 border-black'>
						Please enter a name of workout
					</p>
				)}
				<FormInput
					type='text'
					placeholder={t('trainings.form.nameOfWorkout')}
					register={register}
					registerName='workoutName'
					required={true}
					mb='mb-0'
					width='w-full'
				/>
				<SelectInput
					options={DAYS_OPTION}
					value={daysValue}
					placeholder={t('trainings.form.selectDaysOfTraining')}
					onChange={(o) => setDaysValue(o)}
					multiple={true}
				/>
				<SelectInput
					options={MUSCLES_OPTIONS}
					value={muscleValue}
					placeholder={t('trainings.form.selectMuscleGroups')}
					onChange={(o) => setMuscleValue(o)}
					multiple
				/>

				{fields.map((field, index) => {
					return (
						<div
							key={field.id}
							className='p-4 pb-0 flex items-center gap-2 flex-wrap w border border-gray-400 rounded-lg'>
							<FormInput
								type='text'
								placeholder={t('trainings.form.exerciseName')}
								register={register}
								registerName={`exercises.${index}.exerciseName`}
								required={true}
								width='w-72'
							/>

							<FormInput
								type='number'
								placeholder={t('trainings.workoutItem.sets')}
								register={register}
								registerName={`exercises.${index}.sets`}
								width='w-20 md:w-28'
								min={1}
								max={200}
								required={true}
							/>

							<FormInput
								type='number'
								placeholder={t('trainings.workoutItem.reps')}
								register={register}
								registerName={`exercises.${index}.reps`}
								width='w-20 md:w-28'
								min={1}
								max={500}
								required={true}
							/>

							<FormInput
								type='number'
								placeholder={t('trainings.workoutItem.weight')}
								register={register}
								registerName={`exercises.${index}.weight`}
								width='w-20 md:w-28'
								min={1}
								max={500}
							/>

							<FormInput
								type='text'
								placeholder={t('trainings.form.description')}
								register={register}
								registerName={`exercises.${index}.exerciseDescription`}
								width='flex-grow'
							/>
							<div className='flex gap-2 items-center ml-auto'>
								{index === fields.length - 1 && (
									<button
										onClick={() => append({ name: '', sets: '', reps: '' })}
										className='rounded-full border p-3 border-gray-400 mb-4 cursor-pointer hover:text-green-400 duration-150 hover:scale-110'>
										<FaPlus />
									</button>
								)}
								{fields.length !== 1 && (
									<button
										onClick={() => remove(index)}
										className='w-8 h-8 mb-4 cursor-pointer hover:text-red-400 duration-150 hover:scale-110 text-2xl'>
										<FaTrashAlt />
									</button>
								)}
							</div>
						</div>
					);
				})}
			</div>
			<button
				type='submit'
				className='mt-4 border-none outline-none w-40 h-12 bg-green-500 font-bold rounded-lg hover:scale-110 duration-300'>
				{t('trainings.form.saveBtn')}
			</button>
		</form>
	);
};

export default CreateWorkoutForm;
