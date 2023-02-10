import React from 'react';
import { useDispatch } from 'react-redux';

import { setActiveExercise } from '../../redux/actions/trainingSessionActions';

const SessionExerciseItem = ({ exercise }) => {
	const dispatch = useDispatch();

	const selectActiveExercise = () => {
		dispatch(setActiveExercise(exercise));
	};

	return (
		<li
			className='p-4 border border-gray-300 rounded-lg flex justify-between items-center'
			key={exercise.exerciseName}>
			<div>
				<span className='font-bold text-2xl first-letter:uppercase'>
					{exercise.exerciseName}
				</span>
				<div className='flex gap-4'>
					<span className='text-xl'>Planned sets: {exercise.sets}</span>
					<span className='text-xl'>Planned reps: {exercise.reps}</span>
					<span className='text-xl'>Planned weight: {exercise.weight} kg</span>
				</div>
			</div>
			<button
				className='w-32 h-12 bg-green-400 font-bold rounded-lg hover:scale-110 duration-200'
				onClick={selectActiveExercise}>
				Select
			</button>
		</li>
	);
};

export default SessionExerciseItem;
