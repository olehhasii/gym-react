import React from 'react';
import { FaHome, FaNutritionix, FaRegChartBar } from 'react-icons/fa';

import logo from '../../assets/guts.png';
import NavigationLink from './NavigationLink';

const Navigation = ({ isFull }) => {
	return (
		<div
			className={`${
				isFull ? 'w-64' : 'w-20'
			} fixed top-0 left-0 h-full border-r border-0 border-solid border-gray-300 duration-500 transition-all`}>
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
						? 'my-4 duration-500 transition-all'
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
						linkText='Nutrition'
						linkUrl='/nutrition'
						isFull={isFull}
						icon={<FaNutritionix className='text-xl' />}
					/>
					<NavigationLink
						linkText='Nutrition Report'
						linkUrl='/nutrition-charts'
						isFull={isFull}
						icon={<FaRegChartBar className='text-xl' />}
					/>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
