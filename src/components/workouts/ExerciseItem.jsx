import React from 'react';
import { useTranslation } from 'react-i18next';

const ExerciseItem = ({ exercise }) => {
	const { t } = useTranslation();

	return (
		<li
			className='flex flex-col gap-4 p-3 border bordet-gray-300 rounded-lg'
			key={exercise.exerciseName}>
			<h3 className='font-bold text-xl'>{exercise.exerciseName}</h3>
			<div className='flex gap-1 lg:text-lg'>
				<span>
					{t('trainings.workoutItem.sets')}: {exercise.sets} |
				</span>
				<span>
					{t('trainings.workoutItem.reps')}: {exercise.reps} |
				</span>
				<span>
					{t('trainings.workoutItem.weight')}:{' '}
					{exercise.weight ? exercise.weight + ' kg' : 'No weight'}{' '}
				</span>
			</div>
		</li>
	);
};

export default ExerciseItem;
