import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { setDailyMacros } from '../../../redux/actions/dailyMacrosActions';
import MealsWrapper from './MealsWrapper';
import TotalCalories from './TotalCalories';

const NutritionMacros = () => {
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setDailyMacros(date));
	}, [dispatch, date]);

	return (
		<div className='p-12'>
			<h1 className='font-bold text-4xl mb-8'>Calories for today </h1>
			<div className='flex gap-8 '>
				<TotalCalories />
				<MealsWrapper />
			</div>
		</div>
	);
};

export default NutritionMacros;
