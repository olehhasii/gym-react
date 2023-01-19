import React from 'react';
import { useSelector } from 'react-redux';

import NutritionMacrosRoundChart from './NutritionMacrosRoundChart';

const RoundChartWrapper = () => {
	const { totalCarbs, totalProtein, totalFats } = useSelector(
		(state) => state.reportNutrition
	);

	const totalMacros = totalCarbs + totalProtein + totalFats;

	const findMacrosPercantage = (totalMacros, nutrient) => {
		const percantage = (nutrient / totalMacros) * 100;
		return Math.round(percantage * 10) / 10;
	};

	return (
		<div className='p-5 h-56 shadow-card rounded-lg flex justify-between'>
			<div className='flex flex-col justify-between'>
				<span className='font-bold text-3xl text-blue-400'>
					Carbs - {findMacrosPercantage(totalMacros, totalCarbs)}% ({totalCarbs}
					g)
				</span>
				<span className='font-bold text-3xl text-red-400'>
					Protein - {findMacrosPercantage(totalMacros, totalProtein)}% (
					{totalProtein}g)
				</span>
				<span className='font-bold text-3xl text-yellow-300'>
					Fats - {findMacrosPercantage(totalMacros, totalFats)}% ({totalFats}g)
				</span>
			</div>
			<NutritionMacrosRoundChart />
		</div>
	);
};

export default RoundChartWrapper;
