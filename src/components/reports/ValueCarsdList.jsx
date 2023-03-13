import React from 'react';
import { useSelector } from 'react-redux';

import ValueCard from '../../components/reports/ValueCard';
import caloriesImg from '../../assets/macros/calories.png';
import proteinImg from '../../assets/macros/protein.png';
import carbsImg from '../../assets/macros/carbs.png';
import fastImg from '../../assets/macros/fats.png';
import { useTranslation } from 'react-i18next';

const ValueCarsdList = () => {
	const { totalCalories, totalCarbs, totalProtein, totalFats } = useSelector(
		(state) => state.reportNutrition
	);

	const { t } = useTranslation();

	return (
		<div className='flex flex-col gap-6'>
			<ValueCard
				amount={totalCalories}
				value='kcal'
				valueName={t('nutrition.report.calories')}
				img={caloriesImg}
				color='bg-green-200'
			/>
			<ValueCard
				amount={totalProtein}
				value='g'
				valueName={t('nutrition.report.protein')}
				img={proteinImg}
				color='bg-red-300'
			/>
			<ValueCard
				amount={totalCarbs}
				value='g'
				valueName={t('nutrition.report.carbs')}
				img={carbsImg}
				color='bg-blue-200'
			/>
			<ValueCard
				amount={totalFats}
				value='g'
				valueName={t('nutrition.report.fats')}
				img={fastImg}
				color='bg-yellow-200'
			/>
		</div>
	);
};

export default ValueCarsdList;
