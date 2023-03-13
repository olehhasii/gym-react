import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { getDateString } from '../../helpers/dates';

import { formatTimeSeconds } from '../../helpers/dates';

const HistoryTableRow = ({ log }) => {
	const { t } = useTranslation();

	return (
		<tr className='hover:bg-gray-100'>
			<td className='p-4 text-left font-bold'>
				<span>{log.workoutName}</span>
			</td>
			<td className='p-4 text-left'>
				<span>
					{log.muscleGroups.map((group, index) =>
						index === log.muscleGroups.length - 1 ? group : group + ','
					)}
				</span>
			</td>
			<td className='p-4 text-left'>
				<span>{getDateString(log.timeWorkoutWasStarted)}</span>
			</td>
			<td className='p-4 text-left'>
				<span>{formatTimeSeconds(log.timePassed)}</span>
			</td>
			<td className='p-4 w-8'>
				<Link
					to={`/history/${log._id}`}
					className='block bg-green-400 rounded-lg px-4 py-2 font-bold hover:scale-110 duration-200'>
					{t('trainings.workoutItem.viewBtn')}
				</Link>
			</td>
		</tr>
	);
};

export default HistoryTableRow;
