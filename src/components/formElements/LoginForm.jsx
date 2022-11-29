import React from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

import FormInput from './FormInput';
import FormButton from '../buttons/FormButton';
import { API_URL } from '../../constants/apiConstants';

const LoginForm = () => {
	const { register, handleSubmit } = useForm();
	const navigate = useNavigate();
	const [cookies, setCookie] = useCookies(['access_token']);

	const onSubmit = async (credentials) => {
		axios.post(`${API_URL}/login`, credentials).then((res) => {
			setCookie('access_token', res.data.access_token, { path: '/' });
			sessionStorage.setItem('access_token', res.data.access_token);
		});
		/* navigate('/'); */

		axios
			.get('http://localhost:4000/training/mytrainings', {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
			});
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
