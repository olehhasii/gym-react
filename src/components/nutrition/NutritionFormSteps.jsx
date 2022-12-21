import React from 'react';
import { FaDumbbell, FaRuler, FaRunning } from 'react-icons/fa';

const NutritionFormSteps = () => {
	return (
		<div className='flex  py-8'>
			<div className='flex flex-col items-start w-1/3 relative'>
				<div className='bg-green-500 w-12 h-12 flex justify-center items-center rounded-lg after:absolute after:left-0 after:h-2 after:w-full after:bg-green-500 after:-z-10'>
					<FaDumbbell className='w-10 h-10 text-white' />
				</div>
				<span className='font-bold mt-2'>Your Goals</span>
			</div>
			<div className='flex flex-col items-center w-1/3 relative'>
				<div className='bg-gray-200 w-12 h-12 flex justify-center items-center rounded-lg after:absolute after:left-0 after:h-2 after:w-full after:bg-gray-200 after:-z-10'>
					<FaRuler className='w-10 h-10 text-white' />
				</div>
				<span className='font-bold mt-2'>Parameters</span>
			</div>
			<div className='flex flex-col items-end w-1/3 relative'>
				<div className='bg-gray-200 w-12 h-12 flex justify-center items-center rounded-lg after:absolute after:left-0 after:h-2 after:w-full after:bg-gray-200 after:-z-10'>
					<FaRunning className='w-10 h-10 text-white' />
				</div>
				<span className='font-bold mt-2'>Activity</span>
			</div>
		</div>
	);
};

export default NutritionFormSteps;
