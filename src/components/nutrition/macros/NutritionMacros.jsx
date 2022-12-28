import React from 'react';
import TotalCalories from './TotalCalories';

const NutritionMacros = () => {
	return (
		<div className='p-12'>
			<h1 className='font-bold text-4xl'>Calories for today </h1>
			<TotalCalories />
		</div>
	);
};

export default NutritionMacros;
