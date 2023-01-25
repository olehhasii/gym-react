import React from 'react';
import { useForm } from 'react-hook-form';

import FormInput from '../../formElements/FormInput';
import FormStepButton from '../../formElements/FormStepButton';

const CreateWorkoutForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
			<div className='flex justify-between flex-wrap'>
				<FormInput
					type='text'
					placeholder='Name of workout'
					register={register}
					registerName='name'
					required={true}
				/>
				<FormInput
					type='text'
					placeholder='Muscle groups'
					register={register}
					registerName='name'
					required={true}
				/>
				<FormInput
					type='text'
					placeholder='Days of workout'
					register={register}
					registerName='name'
					required={true}
				/>
				<FormInput
					type='text'
					placeholder='Exercises'
					register={register}
					registerName='name'
					required={true}
				/>
			</div>
			<FormStepButton text='Save workout' type='submit' />
		</form>
	);
};

export default CreateWorkoutForm;
