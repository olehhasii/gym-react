import React from 'react';

const AuthButton = ({ text, onClick, disabled = false }) => {
	return (
		<button
			type='submit'
			onClick={onClick}
			className='cursor-pointer bg-green_txt hover:scale-105 duration-300 h-12 w-full rounded-md font-bold shadow-bru border-2 border-black'>
			{text}
		</button>
	);
};

export default AuthButton;
