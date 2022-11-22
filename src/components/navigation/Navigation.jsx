import React from 'react';

import logo from '../../assets/guts.png';
import NavigationLink from './NavigationLink';

const Navigation = () => {
	return (
		<div className='h-full w-64 border-r border-0 border-solid border-gray-300'>
			<div className='flex p-6'>
				<img src={logo} alt='logo' className='h-12 mr-8' />
				<h2 className='text-lg font-bold flex items-center'>Gym app</h2>
			</div>
			<hr className='my-4' />
			<div>
				<ul className='text-sm font-bold'>
					<NavigationLink linkText='home' linkUrl='/' />
					<NavigationLink linkText='test' linkUrl='/test' />
					<NavigationLink linkText='test' linkUrl='/test2' />
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
