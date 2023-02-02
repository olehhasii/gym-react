import React from 'react';
import { Link } from 'react-router-dom';

const WorkoutItem = ({ key, workout }) => {
	return (
		<li
			key={key}
			className='p-6 w-96 min-h-[13rem] flex flex-col justify-between border border-gray-300 rounded-lg'>
			<span className='font-bold text-2xl'>{workout.workoutName}</span>
			<div className='flex flex-col'>
				<span>
					Muscle groups:{' '}
					{workout.muscleGroups.map((group, index) =>
						index === workout.muscleGroups.length - 1 ? group : group + '/'
					)}{' '}
				</span>
				<span>
					Days:{' '}
					{workout.daysOfWorkout.map((day, index) =>
						index === workout.daysOfWorkout.length - 1 ? day : day + '/'
					)}
				</span>
			</div>
			<div className='flex gap-6'>
				<Link
					to={`${workout._id}`}
					className='font-bold w-20 p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
					View
				</Link>
				<Link
					to='/test'
					className='font-bold w-20 p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
					Train
				</Link>
				<Link
					to='/test'
					className='font-bold w-20 p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
					Edit
				</Link>
			</div>
		</li>
	);
};

export default WorkoutItem;
