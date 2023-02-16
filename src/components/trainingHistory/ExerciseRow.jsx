import React from 'react';

const ExerciseRow = ({ set, index, repsPlanned, weightPlanned }) => {
	let repsColor, weightColor;

	const repsDifference = repsPlanned - set.repsDone;
	const weightDifference = weightPlanned - set.weightDone;

	const setIsDone = +set.repsDone !== 0;

	if (repsDifference <= 2 && repsDifference !== 0) {
		repsColor = 'text-yellow-400';
	} else if (repsDifference > 2) {
		repsColor = 'text-red-400';
	} else if (repsDifference === 0) {
		repsColor = 'text-green-400';
	}

	if (weightDifference <= 4 && weightDifference !== 0) {
		weightColor = 'text-yellow-400';
	} else if (weightDifference > 4) {
		weightColor = 'text-red-400';
	} else if (weightDifference === 0) {
		weightColor = 'text-green-400';
	}

	return (
		<tr className={`${!setIsDone ? 'bg-red-100' : 'hover:bg-gray-100'}`}>
			<td className='p-4 text-left font-bold'>
				<span>{index + 1}</span>
			</td>
			<td className={`${repsColor} p-4 text-left font-bold`}>
				<span>{set.repsDone}</span>
			</td>
			<td className={`${weightColor} p-4 text-left font-bold`}>
				<span>{set.weightDone} kg</span>
			</td>
		</tr>
	);
};

export default ExerciseRow;
