import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

	return (
		<div className='p-14 shadow-2xl border border-solid border-gray-400'>
			<h2 className='font-bold text-3xl mb-8'>{t('auth.login.title')}</h2>
			<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
				<div className='mb-6'>
					<AuthInput
						label={t('auth.login.email')}
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
						label={t('auth.login.password')}
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
				<AuthButton text={t('auth.login.btn')} />
			</form>
			<Link
				to='/auth/signup'
				className='mt-6 block underline duration-300 hover:text-green_txt font-bold'>
				{t('auth.login.dontHaveAccount')}
			</Link>
		</div>
	);
};

export default LoginForm;
