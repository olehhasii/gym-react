import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ActiveExercise from '../../components/trainingSession/ActiveExercise';

import SessionExerciseList from '../../components/trainingSession/SessionExerciseList';
import Timer from '../../components/trainingSession/Timer';

const TrainingSession = () => {
	const { workoutId } = useParams();
	const dispatch = useDispatch();

	const { trainingSession: workout } = useSelector((state) => state);

	/* useEffect(() => {}, [workoutId]); */

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
