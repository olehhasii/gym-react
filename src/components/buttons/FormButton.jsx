import React from 'react';

const FormButton = ({ text, onClick, disabled = false }) => {
	return (
		<button
			type='submit'
			onClick={onClick}
			className='cursor-pointer bg-green_txt hover:scale-105 duration-300 h-12 w-full rounded-md font-bold'>
			{text}
		</button>
	);
};

export default FormButton;
