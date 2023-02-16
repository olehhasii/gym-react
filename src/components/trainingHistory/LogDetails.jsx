import React from 'react';

import { formatTimeSeconds, getDateString } from '../../helpers/dates';

const LogDetails = ({ trainingLog }) => {
	return (
		<div className='mt-6'>
			<h3 className='font-bold text-2xl'>{trainingLog.workoutName}</h3>
			<div className='flex text-lg gap-3 mt-3'>
				<span>
					Date:{' '}
					<span>{getDateString(trainingLog.timeWorkoutWasStarted)} |</span>
				</span>
				<span>
					Time spent: <span>{formatTimeSeconds(trainingLog.timePassed)} |</span>
				</span>
				<span>
					Muscles groups:{' '}
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
