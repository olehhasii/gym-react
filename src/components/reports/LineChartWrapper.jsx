import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import {
	dateToIsoSting,
	getDateNumber,
	getFirstAndLastDayOfWeek,
	getFirstDayOfWeek,
	getMonthName,
	getNextDay,
	getPreviousDay,
} from '../../helpers/dates';
import { setReportNutritionTimeLine } from '../../redux/actions/reportNutritionsActions';
import NutritionLineChart from './NutritionLineChart';

const NutritionChartWrapper = () => {
	const [nutrientName, setNutrientName] = useState('calories');
	const dispatch = useDispatch();

	const { startDate, endDate, timeLine } = useSelector(
		(state) => state.reportNutrition
	);

	const test = (e) => {
		console.log(e.target.value);
	};

	const selectPreviousWeek = () => {
		const previousSunday = getPreviousDay(new Date(startDate));
		console.log(previousSunday);
		const previousWeek = getFirstAndLastDayOfWeek(new Date(previousSunday));
		dispatch(
			setReportNutritionTimeLine({
				timeLine,
				startDate: previousWeek.startDate,
				endDate: previousWeek.endDate,
			})
		);
	};

	const selectNextWeek = () => {
		const nextMonday = getNextDay(new Date(endDate));
		const nextWeek = getFirstAndLastDayOfWeek(new Date(nextMonday));
		dispatch(
			setReportNutritionTimeLine({
				timeLine,
				startDate: nextWeek.startDate,
				endDate: nextWeek.endDate,
			})
		);
	};

	const dateForChecingButton = getFirstDayOfWeek(new Date());

	return (
		<div className='h-96 p-4 shadow-card rounded-lg'>
			<div className='flex items-center'>
				<button className='outline-none' onClick={selectPreviousWeek}>
					<FaChevronLeft className='w-5 h-5 hover:scale-125 cursor-pointer duration-300 mr-2' />
				</button>
				<h1 className='text-xl font-bold text-center'>
					Analysis for {nutrientName} (
					{`${getMonthName(startDate)} ${getDateNumber(startDate)}`} -{' '}
					{`${getMonthName(endDate)} ${getDateNumber(endDate)}`})
				</h1>
				{dateToIsoSting(dateForChecingButton) !==
					dateToIsoSting(new Date(startDate)) && (
					<button className='outline-none' onClick={selectNextWeek}>
						<FaChevronRight className='w-5 h-5 hover:scale-125 cursor-pointer duration-300 ml-2' />
					</button>
				)}
				<div className='ml-auto'>
					<select
						onChange={(e) => {
							setNutrientName(e.target.value);
						}}
						id='nutrient'
						className='w-38 w-36 p-2 mr-4 border border-gray-300 rounded-lg outline-none'>
						<option value='calories'>Calories</option>
						<option value='carbs'>Carbs</option>
						<option value='protein'>Protein</option>
						<option value='fats'>Fats</option>
					</select>
					<select
						onChange={test}
						id='dateRange'
						className='w-38 w-36 p-2 border border-gray-300 rounded-lg outline-none'>
						<option value='week'>Week</option>
						<option value='month'>Month</option>
						<option value='year'>Year</option>
					</select>
				</div>
			</div>
			{/* <button
				onClick={() => {
					dispatch(
						setReportNutritionTimeLine({
							timeLine: 'week',
							startDate: '2023-01-20T16:03:59.589Z',
							endDate: '2023-01-27T16:03:59.589Z',
						})
					);
				}}>
				Click me
			</button> */}
			<NutritionLineChart nutrientName={nutrientName} />
		</div>
	);
};

export default NutritionChartWrapper;
