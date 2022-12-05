import React from 'react';
import { useSelector } from 'react-redux';

import avatar from '../../assets/musashi.jpg';
import NavigationLink from '../navigation/NavigationLink';

const HeaderMenu = ({ show, wrapperRef }) => {
	const userInfo = useSelector((state) => state.userInfo);
	console.log(userInfo);
	if (!show) {
		return null;
	}
	return (
		<div
			ref={wrapperRef}
			className='absolute w-72 top-12 bg-white right-0 rounded-lg border '>
			<div className='flex p-4 items-center'>
				<img src={avatar} alt='avatar' className='rounded-full w-12 h-12' />
				<div className='flex flex-col pl-2'>
					<span className='font-bold'>Oleh</span>
					<span>oleh@test.com</span>
				</div>
			</div>
			<hr />
			<ul className='py-2'>
				<NavigationLink linkText='Home' linkUrl='/test' isFull={true} />
				<NavigationLink linkText='Profile' linkUrl='/test' isFull={true} />
			</ul>
			<hr />
			<ul className='py-1'>
				<NavigationLink linkText='Logout' linkUrl='/test' isFull={true} />
			</ul>
		</div>
	);
};

export default HeaderMenu;
