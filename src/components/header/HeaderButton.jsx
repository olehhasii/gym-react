import React from 'react';

const HeaderButton = ({ icon, onClickHandler, hidden, refResponsive }) => {
	return (
		<button
			className={`${hidden} w-10 h-10 rounded-full flex items-center justify-center hover:border-2 hover:scale-110 duration-500 transition-all`}
			onClick={onClickHandler}
			ref={refResponsive}>
			{icon}
		</button>
	);
};

export default HeaderButton;
