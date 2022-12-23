import React from 'react';
import { MIN_DEFFAULT } from '../../constants/constatns';

const AuthInput = ({
	label,
	register,
	required,
	name,
	type = 'text',
	minLength = MIN_DEFFAULT,
	pattern = null,
}) => {
	return (
		<div className='flex flex-col justify-start mb-2 gap-2'>
			<label className='font-bold'>{label}</label>
			<input
				{...register(name, {
					required,
					minLength: minLength,
					pattern: pattern,
				})}
				className='p-2 outline-none h-12 border-2 border-solid border-black shadow-bru rounded-md focus:border-black'
				placeholder={label}
				type={type}
			/>
		</div>
	);
};

export default AuthInput;
