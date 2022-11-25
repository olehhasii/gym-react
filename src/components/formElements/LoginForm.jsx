import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../buttons/FormButton';

import FormInput from './FormInput';

const LoginForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
			<FormInput label='Email address' register={register} required />
			<FormInput label='Password' register={register} required />
			<FormButton text='Sign in' />
		</form>
	);
};

export default LoginForm;
