import React from 'react';
import { useSelector } from 'react-redux';
import WorkoutItem from './WorkoutItem';

const WorkoutsList = () => {
	const { workouts } = useSelector((state) => state.workouts);

	return (
		<ul className='flex flex-wrap gap-8 justify-center'>
			{workouts.map((workout) => (
				<WorkoutItem key={workout.name} workout={workout} />
			))}
		</ul>
	);
};

export default WorkoutsList;
