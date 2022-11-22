import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ linkText, linkUrl }) => {
	const activeStyle = 'bg-green_bg text-green_txt';
	const linkStyle =
		'px-6 py-2 flex rounded-lg transition-colors duration-300 hover:bg-green_bg hover:text-green_txt ';
	return (
		<li className='px-4 mb-1 '>
			<NavLink
				to={linkUrl}
				className={({ isActive }) =>
					isActive ? `${linkStyle} ${activeStyle}` : linkStyle
				}>
				{linkText}
			</NavLink>
		</li>
	);
};

export default NavigationLink;
