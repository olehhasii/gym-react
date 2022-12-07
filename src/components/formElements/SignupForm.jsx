import React from 'react';
import { useForm } from 'react-hook-form';
import FormButton from '../buttons/FormButton';
import { Link } from 'react-router-dom';

import FormInput from './FormInput';

const SignupForm = () => {
	const { register, handleSubmit } = useForm();

	const onSubmit = (data) => {
		alert(JSON.stringify(data));
	};
	return (
		<div className='p-14  w-1/3 min-h-full border-l border-solid border-gray-300'>
			<h2 className='font-bold text-3xl mb-8'>Create an account</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
				<div className='mb-6'>
					<FormInput
						label='Email address'
						register={register}
						required
						name='email'
					/>
				</div>
				<div className='mb-6'>
					<FormInput
						label='Username'
						register={register}
						required
						name='username'
					/>
				</div>
				<div className='mb-6'>
					<FormInput
						label='Password'
						register={register}
						required
						name='password'
						type='password'
					/>
				</div>
				<FormButton text='Sign up' />
			</form>
			<Link
				to='/auth/login'
				className='mt-6 block underline duration-300 hover:text-green_txt font-bold'>
				Already have an account? Sign in!
			</Link>
		</div>
	);
};

export default SignupForm;
