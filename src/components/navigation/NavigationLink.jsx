import React from 'react';
import { NavLink } from 'react-router-dom';

const NavigationLink = ({ linkText, linkUrl, isFull, icon }) => {
	const activeStyle = 'bg-green_bg text-green_txt';
	const fullLinkStyles =
		'px-6 py-3 flex items-center rounded-lg transition-colors duration-300 hover:bg-green_bg hover:text-green_txt ';
	const smallLinkStyles =
		'pt-3 pb-1 flex flex-col text-xs items-center rounded-lg transition-colors duration-300 hover:bg-green_bg hover:text-green_txt ';
	const linkStyle = isFull ? fullLinkStyles : smallLinkStyles;

	return (
		<li
			className={`${
				isFull ? 'px-4' : 'px-1'
			} mb-1 items-center duration-600 transition-all`}>
			<NavLink
				to={linkUrl}
				className={({ isActive }) =>
					isActive ? `${linkStyle} ${activeStyle}` : linkStyle
				}>
				{icon}
				<span className={isFull ? 'ml-2' : ''}>{linkText}</span>
			</NavLink>
		</li>
	);
};

export default NavigationLink;
