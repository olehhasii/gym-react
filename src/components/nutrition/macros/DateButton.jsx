import React from 'react';

import { MONTH_NAME, WEEK_DAYS } from '../../../constants/constatns';

const DateButton = ({ date, keyProp, disabled, color }) => {
	return (
		<li className='' key={keyProp}>
			<button
				disabled={disabled}
				className='flex flex-col items-center bg-green-100 w-16 h-20 rounded-full'>
				<span className='font-bold'>{MONTH_NAME[date.getMonth()]}</span>
				<span className='font-bold'>{date.getDate()}</span>
				<span className='font-bold'>{WEEK_DAYS[date.getDay()]}</span>
			</button>
		</li>
	);
};

export default DateButton;
