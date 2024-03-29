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
import { useTranslation } from 'react-i18next';

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

	const { t } = useTranslation();

	return (
		<div className='h-96 p-4 shadow-card rounded-lg mb-4 lg:mb-0'>
			<div className='flex items-center'>
				<button className='outline-none' onClick={selectPreviousWeek}>
					<FaChevronLeft className='lg:w-5 lg:h-5 w-3 h-3 hover:scale-125 cursor-pointer duration-300 lg:mr-2 ml-1' />
				</button>
				<h1 className='text-sm lg:text-xl font-bold text-center'>
					{t('nutrition.report.analysis')} {nutrientName} (
					{`${getMonthName(startDate)} ${getDateNumber(startDate)}`} -{' '}
					{`${getMonthName(endDate)} ${getDateNumber(endDate)}`})
				</h1>
				{dateToIsoSting(dateForChecingButton) !==
					dateToIsoSting(new Date(startDate)) && (
					<button className='outline-none' onClick={selectNextWeek}>
						<FaChevronRight className='lg:w-5 lg:h-5 w-3 h-3 hover:scale-125 cursor-pointer duration-300 lg:ml-2 mr-2' />
					</button>
				)}
				<div className='ml-auto'>
					<select
						onChange={(e) => {
							setNutrientName(e.target.value);
						}}
						id='nutrient'
						className='w-20 lg:w-36 p-2 mr-4 border border-gray-300 rounded-lg outline-none text-xs lg:text-base mb-2 lg:mb-0'>
						<option value='calories'>
							{t('nutrition.report.optionCalories')}
						</option>
						<option value='carbs'>{t('nutrition.report.optionCarbs')}</option>
						<option value='protein'>
							{t('nutrition.report.optionProtein')}
						</option>
						<option value='fats'>{t('nutrition.report.optionFats')}</option>
					</select>
					<select
						onChange={test}
						id='dateRange'
						className='w-20 lg:w-36  p-2 border border-gray-300 rounded-lg outline-none text-xs lg:text-base'>
						<option value='week'>{t('nutrition.report.week')}</option>
						<option value='month'>{t('nutrition.report.month')}</option>
						<option value='year'>{t('nutrition.report.year')}</option>
					</select>
				</div>
			</div>
			<NutritionLineChart nutrientName={nutrientName} />
		</div>
	);
};

export default NutritionChartWrapper;
