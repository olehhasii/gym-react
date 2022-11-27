import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../buttons/FormButton';
import { Link } from 'react-router-dom';

import FormInput from './FormInput';
import { API_URL, REQUEST_METHODS } from '../../constants/apiConstants';

const LoginForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = async (credentials) => {
		const result = await fetch(API_URL, {
			method: REQUEST_METHODS.POST,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
			},
			body: JSON.stringify(credentials),
		});
		const data = await result.json();
		console.log(data);
	};
	return (
		<div className='p-14  w-1/3 min-h-full border-l border-solid border-gray-300'>
			<h2 className='font-bold text-3xl mb-8'>Sign into your account</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
				<FormInput
					label='Email address'
					register={register}
					required
					name='email'
				/>
				<FormInput
					label='Password'
					register={register}
					required
					name='password'
					type='password'
				/>
				<FormButton text='Sign in' />
			</form>
			<Link
				to='/auth/signup'
				className='mt-6 block underline duration-300 hover:text-green_txt '>
				Don't have an account? Create one!
			</Link>
		</div>
	);
};

export default LoginForm;
