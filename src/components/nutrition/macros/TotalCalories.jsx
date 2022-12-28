import React from 'react';

import { useSelector } from 'react-redux';
import ProgressCircle from '../../ui/ProgressCircle';

const TotalCalories = () => {
	const { caloriesPerDay } = useSelector(
		(state) => state.userInfo.parameters.macros
	);
	return (
		<div className='w-1/2 mt-8 p-8 px-12 rounded-lg shadow-card flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<div className='relative flex flex-col items-center'>
					<span className='text-xl font-bold'>Eaten</span>
					<span className='text-xl'>243 kcal</span>
				</div>
				<div className='w-40 h-40'>
					<ProgressCircle total={caloriesPerDay} current={0} />
				</div>
				<div className='relative flex flex-col items-center'>
					<span className='text-xl font-bold'>Left</span>
					<span className='text-xl '>2000 kcal</span>
				</div>
			</div>
			<hr className='h-0.5 bg-green-400' />
		</div>
	);
};

export default TotalCalories;
