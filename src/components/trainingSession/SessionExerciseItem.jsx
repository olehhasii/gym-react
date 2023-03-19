import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import api from '../../features/api';

import { setActiveExercise } from '../../redux/actions/trainingSessionActions';

const SessionExerciseItem = ({ exercise, done }) => {
	const dispatch = useDispatch();

	const selectActiveExercise = () => {
		api.patch('/training-session/set-active-exercise', {
			activeExercise: exercise,
		});
		dispatch(setActiveExercise(exercise));
	};

	const { t } = useTranslation();

	return (
		<li
			className={`${
				done && 'bg-green-200'
			} p-4 border border-gray-300 rounded-lg flex justify-between items-center flex-wrap`}
			key={exercise.exerciseName}>
			<div>
				<span className='font-bold text-xl lg:text-2xl first-letter:uppercase'>
					{exercise.exerciseName}
				</span>
				<div className='flex gap-4'>
					<span className='text-sm lg:text-xl'>
						{t('trainings.trainingSession.plannedSets')}: {exercise.sets}
					</span>
					<span className='text-sm lg:text-xl'>
						{t('trainings.trainingSession.plannedReps')}: {exercise.reps}
					</span>
					<span className='text-sm lg:text-xl'>
						{t('trainings.trainingSession.plannedWeight')}: {exercise.weight} kg
					</span>
				</div>
			</div>
			{!done ? (
				<button
					className='w-32 h-10 md:h-12 bg-green-400 font-bold rounded-lg hover:scale-110 duration-200 mt-3 lg:mt-0'
					onClick={selectActiveExercise}>
					{t('trainings.trainingSession.selectBtn')}
				</button>
			) : (
				<span className='font-bold lg:text-xl text-green-500 mt-4 md:mt-0'>
					{t('trainings.trainingSession.finishedExercise')}
				</span>
			)}
		</li>
	);
};

export default SessionExerciseItem;
