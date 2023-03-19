import React from 'react';
import { useTranslation } from 'react-i18next';
import TableHeader from '../ui/TableHeader';
import ExerciseRow from './ExerciseRow';

const ExercisesTable = ({ exercise }) => {
	const { t } = useTranslation();

	if (JSON.stringify(exercise) === '{}') {
		return;
	}

	const allSetsDone =
		+exercise.sets === exercise.setsDone.length ||
		+exercise.sets - exercise.setsDone.length < 0;

	const exerciseData = exercise;

	if (!allSetsDone) {
		const difference = +exercise.sets - exercise.setsDone?.length;

		for (let index = 0; index < difference; index++) {
			exerciseData.setsDone.push({ repsDone: 0, weightDone: 0 });
		}
	}

	return (
		<table className='w-full shadow-card mt-6'>
			<caption className='text-left font-bold text-xl mb-2'>
				{exercise.exerciseName} {exercise.sets}{' '}
				{t('trainings.workoutItem.sets')} | {exercise.reps}{' '}
				{t('trainings.workoutItem.reps')} |{' '}
				{exercise.weight ? exercise.weight + ' kg' : 'No weight'}
			</caption>
			<TableHeader
				headers={[
					t('trainings.trainingsLogs.setNumber'),
					t('trainings.trainingsLogs.repsDone'),
					t('trainings.trainingsLogs.weightDone'),
				]}
			/>
			<tbody>
				{exerciseData.setsDone.map((set, index) => (
					<ExerciseRow
						key={index}
						set={set}
						index={index}
						setsPlanned={exercise.sets}
						repsPlanned={exercise.reps}
						weightPlanned={exercise.weight}
					/>
				))}
				{!allSetsDone}
			</tbody>
		</table>
	);
};

export default ExercisesTable;
