import React from 'react';
import TableHeader from '../ui/TableHeader';
import ExerciseRow from './ExerciseRow';

const ExercisesTable = ({ exercise }) => {
	if (JSON.stringify(exercise) === '{}') {
		return;
	}

	console.log(exercise);

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
				{exercise.exerciseName} {exercise.sets} sets | {exercise.reps} reps |{' '}
				{exercise.weight ? exercise.weight + ' kg' : 'No weight'}
			</caption>
			<TableHeader headers={['Set №', 'Reps Done', 'Weight Done']} />
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
