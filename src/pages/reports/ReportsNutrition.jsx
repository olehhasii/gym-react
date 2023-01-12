import React from 'react';

import NutritionChartWrapper from '../../components/reports/LineChartWrapper';
import RoundChartWrapper from '../../components/reports/RoundChartWrapper';
import ValueCarsdList from '../../components/reports/ValueCarsdList';

const ReportsNutrition = () => {
	return (
		<div className='px-12 py-8 flex justify-between'>
			<ValueCarsdList />
			<div className='flex flex-col w-3/4 justify-between'>
				<NutritionChartWrapper />
				<RoundChartWrapper />
			</div>
		</div>
	);
};

export default ReportsNutrition;
