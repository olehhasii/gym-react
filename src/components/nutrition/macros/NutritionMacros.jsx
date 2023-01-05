import React, { useEffect, useState } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';
import { MONTH_NAME } from '../../../constants/constatns';

import { setDailyMacros } from '../../../redux/actions/dailyMacrosActions';
import MealsWrapper from './MealsWrapper';
import NutritionDates from './NutritionDates';
import TotalCalories from './TotalCalories';

const NutritionMacros = () => {
	const [date, setDate] = useState(new Date().toISOString().split('T')[0]);

	const dispatch = useDispatch();
	const loading = useSelector((state) => state.dailyMacros.loading);
	useEffect(() => {
		dispatch(setDailyMacros(date));
	}, [dispatch, date]);

	if (loading) {
		return (
			<TailSpin
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass='flex justify-center mt-64'
				visible={true}
			/>
		);
	}

	return (
		<div className='p-12 py-8'>
			<h1 className='font-bold text-4xl mb-5'>
				Calories for {new Date(date).getDate()} {` `}
				{MONTH_NAME[new Date(date).getMonth()]}
			</h1>
			<NutritionDates />

			<div className='flex gap-8 mt-8'>
				<TotalCalories />
				<MealsWrapper />
			</div>
		</div>
	);
};

export default NutritionMacros;
