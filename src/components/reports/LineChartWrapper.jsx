import React from 'react';
import NutritionLineChart from './NutritionLineChart';

const NutritionChartWrapper = () => {
	return (
		<div className='h-96 p-4 shadow-card rounded-lg'>
			<div className='flex items-center'>
				<h1 className='text-2xl font-bold text-center mb-3'>
					Analysis for calories
				</h1>
				<select
					name='dateRange'
					id='dateRange'
					className='w-38 w-36 p-2 ml-auto border border-gray-300 rounded-lg outline-none'>
					<option value='week'>Week</option>
					<option value='week'>Month</option>
					<option value='week'>Year</option>
				</select>
			</div>
			<NutritionLineChart />
		</div>
	);
};

export default NutritionChartWrapper;
