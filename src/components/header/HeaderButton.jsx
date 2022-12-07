import React from 'react';

const HeaderButton = ({ icon, onClickHandler }) => {
	return (
		<button
			className='w-10 h-10 rounded-full flex items-center justify-center hover:border-2 hover:scale-110 duration-500 transition-all border-black'
			onClick={onClickHandler}>
			{icon}
		</button>
	);
};

export default HeaderButton;
