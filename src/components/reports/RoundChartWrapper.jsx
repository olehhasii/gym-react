import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import NutritionMacrosRoundChart from './NutritionMacrosRoundChart';

const RoundChartWrapper = () => {
	const { totalCarbs, totalProtein, totalFats } = useSelector(
		(state) => state.reportNutrition
	);

	const totalMacros = totalCarbs + totalProtein + totalFats;

	const findMacrosPercantage = (totalMacros, nutrient) => {
		if (nutrient === 0 || totalMacros === 0) {
			return 0;
		}

		const percantage = (nutrient / totalMacros) * 100;
		return Math.round(percantage * 10) / 10;
	};

	const { t } = useTranslation();

	return (
		<div className='p-5 h-56 shadow-card rounded-lg flex justify-between'>
			<div className='flex flex-col justify-between'>
				<span className='font-bold text-3xl text-blue-400'>
					{t('nutrition.report.optionCarbs')} -{' '}
					{findMacrosPercantage(totalMacros, totalCarbs)}% ({totalCarbs}
					g)
				</span>
				<span className='font-bold text-3xl text-red-400'>
					{t('nutrition.report.optionProtein')} -{' '}
					{findMacrosPercantage(totalMacros, totalProtein)}% ({totalProtein}g)
				</span>
				<span className='font-bold text-3xl text-yellow-300'>
					{t('nutrition.report.optionFats')} -{' '}
					{findMacrosPercantage(totalMacros, totalFats)}% ({totalFats}g)
				</span>
			</div>
			<NutritionMacrosRoundChart />
		</div>
	);
};

export default RoundChartWrapper;
