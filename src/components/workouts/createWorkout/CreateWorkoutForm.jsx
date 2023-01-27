import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

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
		formState: { errors },
	} = useForm();

	const onSubmit = () => {};

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
				{/* <FormInput
					type='text'
					placeholder='Muscle groups'
					register={register}
					registerName='name'
					required={true}
				/> */}
				{/* <FormInput
					type='text'
					placeholder='Days of workout'
					register={register}
					registerName='name'
					required={true}
				/> */}
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
				<FormInput
					type='text'
					placeholder='Exercises'
					register={register}
					registerName='name'
					required={true}
					width='w-full'
				/>
			</div>
			<FormStepButton text='Save workout' type='submit' />
		</form>
	);
};

export default CreateWorkoutForm;
