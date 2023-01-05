import React from 'react';
import { MONTH_NAME, WEEK_DAYS } from '../../../constants/constatns';
import DateButton from './DateButton';

const NutritionDates = () => {
	const todayDate = new Date();

	const past6Days = [...Array(6).keys()]
		.map((index) => {
			const date = new Date();
			date.setDate(date.getDate() - (index + 1));

			return date.toISOString().split('T')[0];
		})
		.reverse();

	const new6Days = [...Array(6).keys()].map((index) => {
		const date = new Date();
		date.setDate(date.getDate() + (index + 1));

		return date.toISOString().split('T')[0];
	});

	/* const dates = [todayDate, ...past6Days]; */

	return (
		<div className='h-16 grow flex justify-center'>
			<ul className='flex gap-6 '>
				{past6Days.map((date) => {
					const dateObj = new Date(date);
					return (
						<li className=''>
							<button className='flex flex-col items-center bg-green-200 w-16 h-20 rounded-full'>
								<span className='font-bold'>
									{MONTH_NAME[dateObj.getMonth()]}
								</span>
								<span className='font-bold'>{dateObj.getDate()}</span>
								<span className='font-bold'>
									{WEEK_DAYS[new Date(date).getDay()]}
								</span>
							</button>
						</li>
					);
				})}
				<li className=''>
					<button className='flex flex-col items-center bg-green-400 w-16 h-20 rounded-full'>
						<span className='font-bold'>
							{MONTH_NAME[todayDate.getMonth()]}
						</span>
						<span className='font-bold'>{todayDate.getDate()}</span>
						<span className='font-bold'>
							{WEEK_DAYS[new Date(todayDate).getDay()]}
						</span>
					</button>
				</li>
				{new6Days.map((date) => {
					const dateObj = new Date(date);
					return (
						<DateButton
							date={dateObj}
							keyProp={date}
							disabled={true}
							color='bg-green-200'
						/>
					);
				})}
			</ul>
		</div>
	);
};

export default NutritionDates;
