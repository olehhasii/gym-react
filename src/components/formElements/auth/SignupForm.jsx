import React from 'react';
import { useForm } from 'react-hook-form';
import AuthButton from './AuthButton';
import { Link, useNavigate } from 'react-router-dom';

import AuthInput from '../AuthInput';
import api from '../../../features/api';
import { EMAIL_PATTERN } from '../../../constants/constatns';

const SignupForm = () => {
	const navigate = useNavigate();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		await api.post('/signup', data).catch((err) => {
			console.log(err);
		});
		navigate('/auth/login');
	};
	return (
		<div className='p-14  w-1/3 min-h-full border-l border-solid border-gray-300'>
			<h2 className='font-bold text-3xl mb-8'>Create an account</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
				<div className='mb-6'>
					<AuthInput
						label='Email address'
						register={register}
						required
						name='email'
						pattern={EMAIL_PATTERN}
					/>
					{errors.email && (
						<p className='bg-red-400 w-max rounded p-1 mt-4 border-2 border-black'>
							Please enter a valid email
						</p>
					)}
				</div>
				<div className='mb-6'>
					<AuthInput
						label='Username'
						register={register}
						required
						name='username'
					/>
					{errors.username && (
						<p className='bg-red-400 w-max rounded p-1 mt-4 border-2 border-black'>
							Username is required and min 3 symbols
						</p>
					)}
				</div>
				<div className='mb-6'>
					<AuthInput
						label='Password'
						register={register}
						required
						name='password'
						type='password'
					/>
					{errors.password && (
						<p className='bg-red-400 w-max rounded p-1 mt-4 border-2 border-black'>
							Password is required and min 6 symbols
						</p>
					)}
				</div>
				<AuthButton text='Sign up' />
			</form>
			<Link
				to='/auth/login'
				className='mt-6 block underline duration-300 hover:text-green_txt '>
				Already have an account? Sign in!
			</Link>
		</div>
	);
};

export default SignupForm;
