import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import gymImg from '../../assets/gym.png';
import LoginForm from '../../components/formElements/LoginForm';

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
				<img src={gymImg} alt='gym' className=' w-2/3' />
			</div>
			<Outlet />
		</div>
	);
};

export default Authentication;
