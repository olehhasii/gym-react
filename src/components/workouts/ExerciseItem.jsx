import React from 'react';

const ExerciseItem = ({ exercise }) => {
	return (
		<li
			className='flex flex-col gap-4 p-4 border bordet-gray-300 rounded-lg'
			key={exercise.exerciseName}>
			<h3 className='font-bold text-xl'>{exercise.exerciseName}</h3>
			<div className='flex gap-1 text-lg'>
				<span>Sets: {exercise.sets} |</span>
				<span>Reps: {exercise.reps} |</span>
				<span>
					Weight: {exercise.weight ? exercise.weight + ' kg' : 'No weight'}{' '}
				</span>
			</div>
		</li>
	);
};

export default ExerciseItem;
