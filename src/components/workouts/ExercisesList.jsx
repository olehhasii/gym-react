import React from 'react';
import ExerciseItem from './ExerciseItem';

const ExercisesList = ({ exercises }) => {
	console.log(exercises);

	return (
		<div className='mt-4'>
			<h2 className='font-bold text-3xl'>Exercises</h2>
			<ul className='flex flex-wrap gap-6 mt-4'>
				{exercises.map((exercise) => (
					<ExerciseItem exercise={exercise} />
				))}
			</ul>
		</div>
	);
};

export default ExercisesList;
