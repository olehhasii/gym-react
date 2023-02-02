import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ExercisesList from '../../components/workouts/ExercisesList';
import WorkoutDetails from '../../components/workouts/WorkoutDetails';

const WorkoutPage = () => {
	const { workoutId } = useParams();
	const { workoutName, daysOfWorkout, muscleGroups, exercises } = useSelector(
		(state) =>
			state.workouts.workouts.find((workout) => workout._id === workoutId)
	);

	return (
		<div className='p-8'>
			<WorkoutDetails
				workoutName={workoutName}
				daysOfWorkout={daysOfWorkout}
				muscleGroups={muscleGroups}
			/>
			<ExercisesList exercises={exercises} />
		</div>
	);
};

export default WorkoutPage;
