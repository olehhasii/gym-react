import React from 'react';
import { useSelector } from 'react-redux';
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
import { getDayName } from '../../helpers/dates';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Tooltip,
	Filler
);

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

const NutritionChart = ({ nutrientName }) => {
	const labels = WEEK_DAYS_LINE_CHART;
	const { daysMacros } = useSelector((state) => state.reportNutrition);

	const dataDays = {
		Mon: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Tue: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Wed: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Thu: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Fri: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Sat: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
		Sund: { date: null, calories: 0, carbs: 0, protein: 0, fats: 0 },
	};

	if (daysMacros) {
		daysMacros.map((day) => {
			const dayName = getDayName(day.date);
			dataDays[dayName] = {
				date: day.date,
				calories: day.caloriesConsumed,
				carbs: day.carbsConsumed,
				protein: day.proteinConsumed,
				fats: day.fatsConsumed,
			};
			return dayName;
		});
		console.log(dataDays);
	}

	const data = {
		labels,
		datasets: [
			{
				fill: true,
				tension: 0.4,
				data: [
					dataDays.Mon[nutrientName],
					dataDays.Tue[nutrientName],
					dataDays.Wed[nutrientName],
					dataDays.Thu[nutrientName],
					dataDays.Fri[nutrientName],
					dataDays.Sat[nutrientName],
					dataDays.Sund[nutrientName],
				],
				borderColor: LINE_CHART_OPTIONS[nutrientName].borderColor,
				backgroundColor: LINE_CHART_OPTIONS[nutrientName].backgroundColor,
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
