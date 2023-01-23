import React from 'react';
import { useSelector } from 'react-redux';
import { useCookies } from 'react-cookie';

import avatar from '../../assets/musashi.jpg';
import NavigationLink from '../navigation/NavigationLink';

const HeaderMenu = ({ show, wrapperRef }) => {
	const [, , removeCookie] = useCookies();

	const userInfo = useSelector((state) => state.userInfo);

	if (!show) {
		return null;
	}
	return (
		<div
			ref={wrapperRef}
			className='absolute w-72 top-12 bg-white right-0 rounded-lg border z-20'>
			<div className='flex p-4 items-center'>
				<img src={avatar} alt='avatar' className='rounded-full w-12 h-12' />
				<div className='flex flex-col pl-2'>
					<span className='font-bold'>{userInfo.username}</span>
					<span>{userInfo.email}</span>
				</div>
			</div>
			<hr />
			<ul className='py-2'>
				<NavigationLink linkText='Home' linkUrl='/test' isFull={true} />
				<NavigationLink linkText='Profile' linkUrl='/test' isFull={true} />
			</ul>
			<hr />
			<ul className='py-1'>
				<li className='px-4 mb-1 items-center duration-600 transition-all'>
					<button
						className='w-full px-6 py-3 flex items-center rounded-lg transition-colors duration-300 hover:bg-green_bg hover:text-green_txt'
						onClick={() => removeCookie('access_token')}>
						Logout
					</button>
				</li>
			</ul>
		</div>
	);
};

export default HeaderMenu;
