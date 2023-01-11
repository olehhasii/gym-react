import React from 'react';

import NutritionChartWrapper from '../../components/reports/NutritionChartWrapper';
import ValueCarsdList from '../../components/reports/ValueCarsdList';

const ReportsNutrition = () => {
	return (
		<div className='px-12 py-8 flex justify-between'>
			<ValueCarsdList />
			<NutritionChartWrapper />
		</div>
	);
};

export default ReportsNutrition;
