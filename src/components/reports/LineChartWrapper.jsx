import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDateNumber, getMonthName } from '../../helpers/dates';
import { setReportNutritionTimeLine } from '../../redux/actions/reportNutritionsActions';
import NutritionLineChart from './NutritionLineChart';

const NutritionChartWrapper = () => {
	const [nutrientName, setNutrientName] = useState('calories');
	const dispatch = useDispatch();

	const { startDate, endDate } = useSelector((state) => state.reportNutrition);

	const test = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className='h-96 p-4 shadow-card rounded-lg'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold text-center mb-3'>
					Analysis for {nutrientName} (
					{`${getMonthName(startDate)} ${getDateNumber(startDate)}`} -{' '}
					{`${getMonthName(endDate)} ${getDateNumber(endDate)}`})
				</h1>
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
