import React from 'react';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

import FormInput from '../formElements/FormInput';
import SelectInput from '../formElements/SelectInput';
import api from '../../features/api';
import { DAYS_OPTION, MUSCLES_OPTIONS } from '../../constants/constatns';
import { useEffect } from 'react';

const EditWorkout = ({ workout }) => {
	const [muscleValue, setMuscleValue] = useState([]);
	const [daysValue, setDaysValue] = useState([]);

	const navigate = useNavigate();

	const {
		register,
		handleSubmit,
		control,
		reset,
		formState: { errors },
	} = useForm({
		defaultValues: workout,
	});

	const { fields, append, remove } = useFieldArray({
		name: 'exercises',
		control,
		rules: {
			required: 'Please add at least 1 exercise',
		},
	});

	useEffect(() => {
		reset({
			...workout,
		});
		setDaysValue(
			workout.daysOfWorkout.map((day) => {
				return { label: day, value: day };
			})
		);
		setMuscleValue(
			workout.muscleGroups.map((group) => {
				return { label: group, value: group };
			})
		);
	}, [workout, reset]);

	const onSubmit = async (data) => {
		const daysOfWorkout = daysValue.map((day) => {
			return day.label;
		});
		const muscleGroups = muscleValue.map((group) => group.label);
		const workout = { ...data, muscleGroups, daysOfWorkout };
		await api.patch(`/training/update/${workout._id}`, workout);
		navigate('/workouts');
	};

	return (
		<div className='px-8 py-6 z-30'>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
				<div className='flex flex-col gap-4 '>
					<div className='flex flex-col gap-2'>
						<span className='font-bold text-lg'>Name of Workout</span>
						<FormInput
							type='text'
							placeholder='Name of workout'
							register={register}
							registerName='workoutName'
							required={true}
							mb='mb-0'
							width='w-full'
							value={workout.workoutName}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='font-bold text-lg'>Days of training</span>
						<SelectInput
							options={DAYS_OPTION}
							value={daysValue}
							placeholder='Select days of training'
							onChange={(o) => setDaysValue(o)}
							multiple={true}
						/>
					</div>
					<div className='flex flex-col gap-2'>
						<span className='font-bold text-lg'>Muscle groups</span>
						<SelectInput
							options={MUSCLES_OPTIONS}
							value={muscleValue}
							placeholder='Select muscle groups'
							onChange={(o) => setMuscleValue(o)}
							multiple
						/>
					</div>
					{fields.map((field, index) => {
						return (
							<div
								key={field.id}
								className='p-4 pb-0 flex items-center gap-2 flex-wrap w border border-gray-400 rounded-lg'>
								<FormInput
									type='text'
									placeholder='Exercise name'
									register={register}
									registerName={`exercises.${index}.exerciseName`}
									required={true}
									width='w-72'
								/>

								<FormInput
									type='number'
									placeholder='Sets'
									register={register}
									registerName={`exercises.${index}.sets`}
									width='w-18'
									min={1}
									max={200}
									required={true}
								/>

								<FormInput
									type='number'
									placeholder='Reps'
									register={register}
									registerName={`exercises.${index}.reps`}
									width='w-18'
									min={1}
									max={500}
									required={true}
								/>

								<FormInput
									type='number'
									placeholder='Weight'
									register={register}
									registerName={`exercises.${index}.weight`}
									width='w-18'
									min={1}
									max={500}
								/>

								<FormInput
									type='text'
									placeholder='Description (optional)'
									register={register}
									registerName={`exercises.${index}.exerciseDescription`}
									width='flex-grow'
								/>
								<div className='flex gap-2 items-center ml-auto'>
									{index === fields.length - 1 && (
										<button
											onClick={() =>
												append({
													exerciseName: '',
													sets: '',
													reps: '',
													weight: '',
												})
											}
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
				<div className='mt-4 flex gap-4'>
					<button
						type='submit'
						className='border-none outline-none w-40 h-12 bg-green-500 font-bold rounded-lg hover:scale-110 duration-300'>
						Save workout
					</button>
					<Link
						to='/workouts'
						className='flex items-center justify-center border-none outline-none w-40 h-12 bg-red-500 font-bold rounded-lg hover:scale-110 duration-300'>
						Cancel
					</Link>
				</div>
			</form>
		</div>
	);
};

export default EditWorkout;
