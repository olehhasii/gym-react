import React from 'react';
import { useTranslation } from 'react-i18next';
import ExerciseItem from './ExerciseItem';

const ExercisesList = ({ exercises }) => {
	const { t } = useTranslation();

	return (
		<div className='mt-4'>
			<h2 className='font-bold text-3xl'>
				{t('trainings.workoutItem.exercises')}
			</h2>
			<ul className='flex flex-wrap gap-6 mt-4'>
				{exercises.map((exercise) => (
					<ExerciseItem exercise={exercise} />
				))}
			</ul>
		</div>
	);
};

export default ExercisesList;
