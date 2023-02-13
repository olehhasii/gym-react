import React from 'react';
import SessionExerciseItem from './SessionExerciseItem';

const SessionExerciseList = ({ exercises }) => {
	return (
		<div>
			<p className='font-bold text-3xl mt-5'>Select exercise from your list</p>
			<ul className='list-none mt-6 flex flex-col gap-4'>
				{exercises.map((exercise) => {
					return exercise.done ? null : (
						<SessionExerciseItem exercise={exercise} />
					);
				})}
			</ul>
			<ul className='list-none mt-6 flex flex-col gap-4'>
				{exercises.map((exercise) => {
					return exercise.done ? (
						<SessionExerciseItem exercise={exercise} done={true} />
					) : null;
				})}
			</ul>
		</div>
	);
};

export default SessionExerciseList;
