import React from 'react';

const RadioInput = ({
	id,
	labelText,
	defaultChecked,
	value,
	register,
	registerName,
}) => {
	return (
		<div className='h-16 flex items-center mb-4 relative'>
			<input
				type='radio'
				name='radio'
				id={id}
				defaultChecked={defaultChecked}
				value={value}
				{...register(registerName)}
				className='appearance-none font-bold p-2 px-4 border-2 border-gray-200 h-full w-full rounded-lg flex items-center checked:bg-green-100 checked:border-green-300 cursor-pointer'
			/>
			<label htmlFor={id} className='font-bold absolute left-6 cursor-pointer'>
				{labelText}
			</label>
		</div>
	);
};

export default RadioInput;
