import React from 'react';
import { Outlet } from 'react-router-dom';

import img from '../../assets/main.jpg';

const Authentication = () => {
	return (
		<div className='h-full flex justify-between'>
			<div className='flex items-center flex-col p-14'>
				<div className='flex flex-col justify-center items-center '>
					<h1 className='font-bold text-4xl'>
						Organize your trainings and meals.
					</h1>
					<h2 className='text-2xl  text-center mt-3 mb-3'>
						Become focused, organized, and calm with Gym App. Reach your goals!
					</h2>
				</div>
				<img
					src={img}
					alt='gym'
					className='absolute left-0 bottom-0 -z-10 h-3/4'
				/>
			</div>
			<Outlet />
		</div>
	);
};

export default Authentication;
