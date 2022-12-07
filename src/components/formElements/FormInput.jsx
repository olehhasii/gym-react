import React from 'react';

const FormInput = ({ label, register, required, name, type = 'text' }) => {
	return (
		<div className='flex flex-col justify-start mb-2 gap-2'>
			<label className='font-bold'>{label}</label>
			<input
				{...register(name, { required })}
				className='p-2 outline-none h-12 border-2 border-solid border-black shadow-bru rounded-md focus:border-black'
				placeholder={label}
				type={type}
			/>
		</div>
	);
};

export default FormInput;
