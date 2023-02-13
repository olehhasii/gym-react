import React, { useEffect, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

import EditWorkout from '../../components/workouts/EditWorkout';
import ExercisesList from '../../components/workouts/ExercisesList';
import WorkoutDetails from '../../components/workouts/WorkoutDetails';
import api from '../../features/api';

const WorkoutPage = () => {
	const { workoutId } = useParams();
	const [searchParams] = useSearchParams();

	const [workout, setWorkout] = useState({
		workoutName: '',
		daysOfWorkout: [],
		exercises: [],
		muscleGroups: [],
	});

	useEffect(() => {
		api
			.get(`/training/training/${workoutId}`)
			.then((res) => {
				setWorkout(res.data);
			})
			.catch((err) => console.log(err));
	}, [workoutId]);

	if (searchParams.get('edit')) {
		return <EditWorkout workout={workout} />;
	}
	return (
		<div className='p-8 z-30'>
			<WorkoutDetails
				workoutName={workout.workoutName}
				daysOfWorkout={workout.daysOfWorkout}
				muscleGroups={workout.muscleGroups}
				workoutId={workout._id}
				workout={workout}
			/>
			<ExercisesList exercises={workout.exercises} />
		</div>
	);
};

export default WorkoutPage;
