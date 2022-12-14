import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';

import AuthInput from '../AuthInput';
import AuthButton from './AuthButton';
import { setUser } from '../../../redux/actions/userActions';
import api from '../../../features/api';
import { EMAIL_PATTERN, MIN_PASSWORD } from '../../../constants/constatns';

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const navigate = useNavigate();
	// eslint-disable-next-line no-unused-vars
	const [cookies, setCookie] = useCookies(['access_token']);
	const dispathc = useDispatch();

	const onSubmit = async (credentials) => {
		await api.post('/login', credentials).then((res) => {
			setCookie('access_token', res.data.access_token, { path: '/' });
		});
		navigate('/');
		dispathc(setUser());
	};
	return (
		<div className='p-14  w-1/3 min-h-full border-l border-solid border-gray-300'>
			<h2 className='font-bold text-3xl mb-8'>Sign into your account</h2>
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
						label='Password'
						register={register}
						required
						name='password'
						type='password'
						minLength={MIN_PASSWORD}
					/>
					{errors.password && (
						<p className='bg-red-400 w-max rounded p-1 mt-4 border-2 border-black'>
							Password is required and min 6 symbols
						</p>
					)}
				</div>
				<AuthButton text='Sign in' />
			</form>
			<Link
				to='/auth/signup'
				className='mt-6 block underline duration-300 hover:text-green_txt font-bold'>
				Don't have an account? Create one!
			</Link>
		</div>
	);
};

export default LoginForm;
