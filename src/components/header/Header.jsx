import React from 'react';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const Header = ({ isFull, onSetFull }) => {
	return (
		<header
			className={`${
				isFull
					? 'left-64 w-[calc(100%_-_16rem)]'
					: 'left-20 w-[calc(100%_-_5rem)]'
			} px-10 flex items-center h-16 fixed top-0 shadow-md duration-500 transition-all`}>
			<button
				className='w-12 h-12 rounded-full flex items-center justify-center border-2 hover:scale-110 duration-500 transition-all '
				onClick={onSetFull}>
				<FaAngleDoubleLeft
					className={`${
						isFull
							? 'duration-500 transition-all'
							: 'rotate-180 duration-500 transition-all'
					}`}
				/>
			</button>
		</header>
	);
};

export default Header;
