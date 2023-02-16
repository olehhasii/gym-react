import React from 'react';
import TableHeader from '../ui/TableHeader';
import HistoryTableRow from './HistoryTableRow';

const TrainingHistoryTable = ({ logs }) => {
	console.log(logs);

	return (
		<div className='w-full mt-8'>
			<table className='w-full shadow-card'>
				<TableHeader
					headers={['Workout name', 'Muscle groups', 'Date', 'Time', '']}
				/>
				<tbody>
					{logs.map((log) => (
						<HistoryTableRow log={log} key={log._id} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TrainingHistoryTable;
