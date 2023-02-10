import React from 'react';
import { useDispatch } from 'react-redux';

import { setActiveExercise } from '../../redux/actions/trainingSessionActions';

const ActiveExercise = () => {
	const dispatch = useDispatch();

	const selectActiveExercise = () => {
		dispatch(setActiveExercise(null));
	};

	return (
		<div>
			<button onClick={selectActiveExercise}>Select another exercise</button>
		</div>
	);
};

export default ActiveExercise;
