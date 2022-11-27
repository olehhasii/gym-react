import React from 'react';

const FormButton = ({ text, onClick }) => {
	return (
		<button
			type='submit'
			onClick={onClick}
			className='h-12 bg-green_txt w-full rounded-md hover:scale-105 duration-300'>
			{text}
		</button>
	);
};

export default FormButton;
