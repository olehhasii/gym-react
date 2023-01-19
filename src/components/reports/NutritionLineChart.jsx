import React from 'react';
import { Line } from 'react-chartjs-2';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler,
} from 'chart.js';

import {
	LINE_CHART_OPTIONS,
	WEEK_DAYS_LINE_CHART,
} from '../../constants/chartsConstants';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler
);

const NutritionChart = () => {
	const options = {
		maintainAspectRatio: false,
		scales: {
			x: {
				ticks: { font: { size: 18 }, padding: 10 },
				grid: {
					display: false,
				},
			},
			y: {
				ticks: { font: { size: 14 }, padding: 5 },
				grid: {
					display: false,
				},
			},
		},
		plugins: {
			legend: {
				display: false,
			},
		},
		layout: {},
		elements: {},
	};

	const labels = WEEK_DAYS_LINE_CHART;

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				tension: 0.4,
				data: [1800, 0, 0, 0, 0, 0, 0],
				borderColor: LINE_CHART_OPTIONS.borderColors.caloriesBorderColor,
				backgroundColor: LINE_CHART_OPTIONS.backgroundColors.caloriesBgColor,
			},
		],
	};

	return (
		<div className='h-80'>
			<Line data={data} options={options} />
		</div>
	);
};

export default NutritionChart;
