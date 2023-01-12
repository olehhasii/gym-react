import React from 'react';
import NutritionMacrosRoundChart from './NutritionMacrosRoundChart';

const RoundChartWrapper = () => {
	return (
		<div className='p-5 h-56 shadow-card rounded-lg flex justify-between'>
			<div className='flex flex-col justify-between'>
				<span className='font-bold text-3xl text-blue-400'>
					Carbs - 40% (201g)
				</span>
				<span className='font-bold text-3xl text-red-400'>
					Protein - 30% (178g)
				</span>
				<span className='font-bold text-3xl text-yellow-300'>
					Fats - 30% (178g)
				</span>
			</div>
			<NutritionMacrosRoundChart />
		</div>
	);
};

export default RoundChartWrapper;
