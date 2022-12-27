import React from 'react';

const FormStepButton = ({ text, onClick, type = 'button' }) => {
	return (
		<button
			type={type}
			className='cursor-pointer bg-green-500 hover:scale-105 duration-300 h-12 w-1/3 rounded-md font-bold  border-none ml-3 '
			onClick={onClick}>
			{text}
		</button>
	);
};

export default FormStepButton;
