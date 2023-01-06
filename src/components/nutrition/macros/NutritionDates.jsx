import React from 'react';
import { useSelector } from 'react-redux';
import {
	getNew6days,
	getPast6Days,
	getTodaysDate,
} from '../../../helpers/dates';

import DateButton from './DateButton';

const NutritionDates = () => {
	const activeDate = useSelector(
		(state) => state.dailyMacros.date.split('T')[0]
	);

	const todayDate = getTodaysDate();
	const past6Days = getPast6Days();
	const new6Days = getNew6days();

	const datesArray = [...past6Days, todayDate, ...new6Days];

	return (
		<div className='h-16 grow flex justify-center'>
			<ul className='flex gap-6 '>
				{datesArray.map((date) => {
					const active = date === activeDate ? true : false;
					return <DateButton date={date} keyProp={date} active={active} />;
				})}
			</ul>
		</div>
	);
};

export default NutritionDates;
