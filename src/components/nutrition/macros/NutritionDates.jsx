import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';

import {
	getNextDay,
	getPast6Days,
	getPreviousDay,
	getTodaysDate,
} from '../../../helpers/dates';
import DateButton from './DateButton';

const NutritionDates = () => {
	const activeDate = useSelector(
		(state) => state.dailyMacros.date.split('T')[0]
	);

	const todayDate = getTodaysDate();
	const past6Days = getPast6Days().reverse();

	const [datesArray, setDatesArray] = useState([todayDate, ...past6Days]);

	const onPastDate = () => {
		const newPastDate = getPreviousDay(
			new Date(datesArray[datesArray.length - 1])
		);
		const newDateArray = [...datesArray, newPastDate];
		newDateArray.shift();

		setDatesArray(newDateArray);
	};

	const onNewDate = () => {
		const nextDay = getNextDay(new Date(datesArray[0]));
		const newDateArray = [nextDay, ...datesArray];
		newDateArray.pop();

		setDatesArray(newDateArray);
	};

	return (
		<div className='flex mt-3 lg:mt-0'>
			{datesArray[0] !== todayDate && (
				<button onClick={onNewDate} className='outline-none'>
					<FaChevronLeft className='lg:w-6 lg:h-6 w-3 h-3 hover:scale-125 cursor-pointer duration-300 mr-4' />
				</button>
			)}
			<ul className='flex gap-2 lg:gap-6 '>
				{datesArray.map((date) => {
					const active = date === activeDate ? true : false;
					return <DateButton date={date} keyProp={date} active={active} />;
				})}
			</ul>
			<button onClick={onPastDate} className='outline-none'>
				<FaChevronRight className='lg:w-6 lg:h-6 w-3 h-3 hover:scale-125 cursor-pointer duration-300 ml-4' />
			</button>
		</div>
	);
};

export default NutritionDates;
