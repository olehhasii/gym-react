import React from 'react';
import { useSelector } from 'react-redux';

import ActiveExercise from '../../components/trainingSession/ActiveExercise';

import SessionExerciseList from '../../components/trainingSession/SessionExerciseList';
import Timer from '../../components/trainingSession/Timer';

const TrainingSession = () => {
	const { trainingSession: workout } = useSelector((state) => state);

	return (
		<div className='p-8'>
			<Timer />
			{workout.activeExercise ? (
				<ActiveExercise />
			) : (
				<SessionExerciseList exercises={workout.exercises} />
			)}
		</div>
	);
};

export default TrainingSession;
