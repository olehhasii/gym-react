import React from 'react';
import { useState } from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { FaPlus, FaTrashAlt } from 'react-icons/fa';

import FormInput from '../../formElements/FormInput';
import FormStepButton from '../../formElements/FormStepButton';
import SelectInput from '../../formElements/SelectInput';

const muscleOptions = [
	{ label: 'Back', value: 'back' },
	{ label: 'Biceps', value: 'biceps' },
	{ label: 'Triceps', value: 'triceps' },
	{ label: 'Chest', value: 'chest' },
	{ label: 'Legs', value: 'legs' },
	{ label: 'Shoulders', value: 'shoulders' },
];

const daysOptions = [
	{ label: 'Monday', value: 1 },
	{ label: 'Tuesday', value: 2 },
	{ label: 'Wednesday', value: 3 },
	{ label: 'Thursday', value: 4 },
	{ label: 'Friday', value: 5 },
	{ label: 'Saturday', value: 6 },
	{ label: 'Sunday', value: 0 },
];

const CreateWorkoutForm = () => {
	const [muscleValue, setMuscleValue] = useState([]);
	const [daysValue, setDaysValue] = useState([]);

	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			exercises: [{ name: '', sets: 0, reps: 0 }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: 'exercises',
		control,
		rules: {
			required: 'Please add at least 1 exercise',
		},
	});

	const onSubmit = (data) => {
		const daysOfWokorkout = daysValue.map((day) => {
			return day.label;
		});
		const muscleGroups = muscleValue.map((group) => group.label);
		const workout = { ...data, muscleGroups, daysOfWokorkout };
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
			<div className='flex justify-between gap-4 flex-wrap'>
				<FormInput
					type='text'
					placeholder='Name of workout'
					register={register}
					registerName='name'
					required={true}
					mb='mb-0'
					width='w-full'
				/>
				<SelectInput
					options={daysOptions}
					value={daysValue}
					placeholder='Select days of training'
					onChange={(o) => setDaysValue(o)}
					multiple={true}
				/>
				<SelectInput
					options={muscleOptions}
					value={muscleValue}
					placeholder='Select muscle groups'
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
								max={20}
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
								required={true}
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
										onClick={() => append({ name: '', sets: 0, reps: 0 })}
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
				Save workout
			</button>
		</form>
	);
};

export default CreateWorkoutForm;
