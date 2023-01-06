import React from 'react';
import { useDispatch } from 'react-redux';

import { setDailyMacros } from '../../../redux/actions/dailyMacrosActions';

import {
	dateToIsoSting,
	getDateNumber,
	getDayName,
	getMonthName,
} from '../../../helpers/dates';

const DateButton = ({ date, keyProp, disabled = false, active }) => {
	const dispatch = useDispatch();

	return (
		<li className='' key={keyProp}>
			<button
				onClick={() => dispatch(setDailyMacros(dateToIsoSting(date)))}
				disabled={disabled}
				className={`${
					active ? 'bg-green-500' : 'bg-green-100'
				}  flex flex-col items-center w-16 h-20 rounded-full`}>
				<span className='font-bold'>{getMonthName(date)}</span>
				<span className='font-bold'>{getDateNumber(date)}</span>
				<span className='font-bold'>{getDayName(date)}</span>
			</button>
		</li>
	);
};

export default DateButton;
