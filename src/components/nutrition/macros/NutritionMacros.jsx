import React from 'react';
import MealsList from './MealsList';
import TotalCalories from './TotalCalories';

const NutritionMacros = () => {
	return (
		<div className='p-12'>
			<h1 className='font-bold text-4xl mb-8'>Calories for today </h1>
			<div className='flex gap-8 '>
				<TotalCalories />
				<MealsList />
			</div>
		</div>
	);
};

export default NutritionMacros;
