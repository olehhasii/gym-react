import React from 'react';
import { useTranslation } from 'react-i18next';
import TableHeader from '../ui/TableHeader';
import HistoryTableRow from './HistoryTableRow';

const TrainingHistoryTable = ({ logs }) => {
	const { t } = useTranslation();

	return (
		<div className='w-full mt-8'>
			<table className='w-full shadow-card'>
				<TableHeader
					headers={[
						t('trainings.trainingsLogs.workoutName'),
						t('trainings.trainingsLogs.muscleGroups'),
						t('trainings.trainingsLogs.date'),
						t('trainings.trainingsLogs.time'),
						'',
					]}
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
