import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const WorkoutDetails = ({ workoutName, daysOfWorkout, muscleGroups }) => {
	const [, setSearchParams] = useSearchParams();

	return (
		<div className='flex flex-col flex-wrap gap-4 '>
			<div className='flex justify-between'>
				<h1 className='font-bold text-3xl'>{workoutName}</h1>
				<div className='flex gap-3'>
					<Link
						to='/test'
						className='block font-bold w-32 text-lg p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
						Train
					</Link>
					<button
						to='/test'
						onClick={() => setSearchParams({ edit: true })}
						className='block font-bold w-32 text-lg p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
						Edit
					</button>
					<button className='font-bold w-32 text-lg p-2 text-center bg-red-500 rounded-lg hover:scale-110 duration-200'>
						Delete
					</button>
				</div>
			</div>
			<div>
				<span className='text-xl flex items-center gap-3 flex-wrap'>
					Muscle groups:{' '}
					{muscleGroups.map((group) => (
						<span className='border border-gray-300 rounded-md p-2'>
							{group}
						</span>
					))}
				</span>
				<span className='text-xl flex items-center gap-3 flex-wrap mt-2'>
					Days:{' '}
					{daysOfWorkout.map((day) => (
						<span className='border border-gray-300 rounded-md p-2'>{day}</span>
					))}
				</span>
			</div>
		</div>
	);
};

export default WorkoutDetails;
