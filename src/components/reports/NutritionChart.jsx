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

import { WEEK_DAYS } from '../../constants/constatns';

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
		plugins: {
			customCanvasBackgroundColor: {
				color: 'black',
			},
		},
		scales: {
			x: {
				ticks: { font: { size: 20 } },
				grid: {
					display: false,
				},
			},
			y: {
				grid: {
					display: false,
				},
			},
		},
		layout: {},
		elements: {},
	};

	const labels = WEEK_DAYS;

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				tension: 0.4,
				label: 'TEST',
				data: [1800, 1953, 1732, 2145, 1478, 1889, 1980],
				borderColor: '#86efac',
				backgroundColor: '#bbf7d0',
			},
		],
	};

	return <Line data={data} options={options} />;
};

export default NutritionChart;
