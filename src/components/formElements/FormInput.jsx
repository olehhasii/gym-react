import React from 'react';

const FormInput = ({
	type,
	placeholder,
	register,
	required,
	registerName,
	min,
	max,
	width = 'w-80',
	height = 'h-14',
	mb = 'mb-4',
}) => {
	return (
		<input
			type={type}
			className={`${width} ${height} ${mb} p-4 border border-gray-300 rounded-lg outline-none focus:border-black`}
			placeholder={placeholder}
			min={min}
			max={max}
			{...register(registerName, { required, min, max })}
		/>
	);
};

export default FormInput;
