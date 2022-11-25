import React from 'react';

const FormInput = ({ label, register, required }) => {
	return (
		<div className='flex flex-col justify-start mb-6 gap-2'>
			<label>{label}</label>
			<input
				{...register(label, { required })}
				className='p-2 outline-none h-12 border border-solid border-gray-300 rounded-md focus:border-black'
				placeholder={label}
			/>
		</div>
	);
};

export default FormInput;
