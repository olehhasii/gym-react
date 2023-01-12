import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { ROUND_CHART_OPTIONS } from '../../constants/chartsConstants';

ChartJS.register(ArcElement, Tooltip, Legend);

const options = {
	maintainAspectRatio: false,
	plugins: {
		legend: {
			display: false,
		},
	},
	layout: {},
	elements: {},
};

const data = {
	labels: ['Carbs', 'Protein', 'Fats'],
	datasets: [
		{
			label: '%',
			data: [12, 19, 3],
			backgroundColor: [
				ROUND_CHART_OPTIONS.backgroundColors.carbsBgColor,
				ROUND_CHART_OPTIONS.backgroundColors.proteinBgColor,
				ROUND_CHART_OPTIONS.backgroundColors.fatsBgColor,
			],
			borderColor: [
				ROUND_CHART_OPTIONS.borderColors.carbsBorderColor,
				ROUND_CHART_OPTIONS.borderColors.proteinBorderColor,
				ROUND_CHART_OPTIONS.borderColors.fatsBorderColor,
			],
			borderWidth: 1,
		},
	],
};

const NutritionMacrosRoundChart = () => {
	return (
		<div className=''>
			<Doughnut data={data} options={options} />
		</div>
	);
};

export default NutritionMacrosRoundChart;
