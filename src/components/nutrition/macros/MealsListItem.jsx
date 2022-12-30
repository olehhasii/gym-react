import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const MealsListItem = ({ img, kcalValue, mealName }) => {
	return (
		<div className='flex items-center shadow-card rounded-md p-3'>
			<img src={img} alt='meal' className='w-12 h-12' />
			<div className='ml-5'>
				<h3 className='font-bold'>{mealName}</h3>
				<span className=''>{kcalValue} kcal</span>
			</div>
			<FaChevronRight className='w-8 h-8 ml-auto' />
		</div>
	);
};

export default MealsListItem;
