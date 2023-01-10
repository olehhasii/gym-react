import React, { useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { useDispatch, useSelector } from 'react-redux';

import { getDateNumber, getMonthName } from '../../../helpers/dates';
import { setDailyMacros } from '../../../redux/actions/dailyMacrosActions';
import MealsWrapper from './MealsWrapper';
import NutritionDates from './NutritionDates';
import TotalCalories from './TotalCalories';

const NutritionMacros = () => {
	const dispatch = useDispatch();
	const { loading, date } = useSelector((state) => state.dailyMacros);
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
			<div className='flex items-center justify-between'>
				<h1 className='font-bold text-4xl'>
					Calories for {getDateNumber(date)} {` `}
					{getMonthName(date)}
				</h1>
				<NutritionDates />
			</div>
			<hr className='mt-4' />
			<div className='flex gap-8 mt-8'>
				<TotalCalories />
				<MealsWrapper />
			</div>
		</div>
	);
};

export default NutritionMacros;
