import React from 'react';
import { useTranslation } from 'react-i18next';

import { formatTimeSeconds, getDateString } from '../../helpers/dates';

const LogDetails = ({ trainingLog }) => {
	const { t } = useTranslation();

	return (
		<div className='mt-6'>
			<h3 className='font-bold text-2xl'>{trainingLog.workoutName}</h3>
			<div className='flex text-lg gap-3 mt-3'>
				<span>
					{t('trainings.trainingsLogs.date')}:{' '}
					<span>{getDateString(trainingLog.timeWorkoutWasStarted)} |</span>
				</span>
				<span>
					{t('trainings.trainingsLogs.timeSpent')}:{' '}
					<span>{formatTimeSeconds(trainingLog.timePassed)} |</span>
				</span>
				<span>
					{t('trainings.trainingsLogs.muscleGroups')}:{' '}
					<span>
						{trainingLog.muscleGroups.map((group, index) =>
							index === trainingLog.muscleGroups.length - 1
								? group
								: group + ','
						)}
					</span>
				</span>
			</div>
		</div>
	);
};

export default LogDetails;
