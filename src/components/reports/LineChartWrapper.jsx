import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDateNumber, getMonthName } from '../../helpers/dates';
import { setReportNutritionTimeLine } from '../../redux/actions/reportNutritionsActions';
import NutritionLineChart from './NutritionLineChart';

const NutritionChartWrapper = () => {
	const { startDate, endDate } = useSelector((state) => state.reportNutrition);
	const dispatch = useDispatch();

	const test = (e) => {
		console.log(e.target.value);
	};

	return (
		<div className='h-96 p-4 shadow-card rounded-lg'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold text-center mb-3'>
					Analysis for calories (
					{`${getMonthName(startDate)} ${getDateNumber(startDate)}`} -{' '}
					{`${getMonthName(endDate)} ${getDateNumber(endDate)}`})
				</h1>
				<select
					onChange={test}
					id='dateRange'
					className='w-38 w-36 p-2 ml-auto border border-gray-300 rounded-lg outline-none'>
					<option value='week'>Week</option>
					<option value='month'>Month</option>
					<option value='year'>Year</option>
				</select>
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
			<NutritionLineChart />
		</div>
	);
};

export default NutritionChartWrapper;
