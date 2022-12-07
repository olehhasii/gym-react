import React from 'react';
import { FaHome } from 'react-icons/fa';

import logo from '../../assets/guts.png';
import NavigationLink from './NavigationLink';

const Navigation = ({ isFull }) => {
	return (
		<div
			className={`${
				isFull ? 'w-64' : 'w-20'
			} fixed top-0 left-0 h-full border-r-2 border-0 border-solid border-black duration-500 transition-all`}>
			<div className='flex p-6'>
				<img src={logo} alt='logo' className='h-12 mr-8' />
				<h2
					className={
						isFull
							? 'text-lg font-bold flex items-center duration-1000 transition-all'
							: 'hidden duration-1000 transition-all'
					}>
					Gym app
				</h2>
			</div>
			<hr
				className={
					isFull
						? 'my-4 border-1 h-0 border-black bg-black  duration-500 transition-all'
						: 'my-1 duration-500 transition-all'
				}
			/>
			<div>
				<ul className='text-sm font-bold'>
					<NavigationLink
						linkText='Overview'
						linkUrl='/'
						isFull={isFull}
						icon={<FaHome className='text-xl' />}
					/>
					<NavigationLink
						linkText='test'
						linkUrl='/test'
						isFull={isFull}
						icon={<FaHome className='text-xl' />}
					/>
					<NavigationLink
						linkText='test'
						linkUrl='/test2'
						isFull={isFull}
						icon={<FaHome className='text-xl' />}
					/>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
