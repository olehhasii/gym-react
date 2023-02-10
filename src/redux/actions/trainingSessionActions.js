import { TrainingSessionActionTypes } from '../constants/action-types';

export const setTrainingSession = (workout) => {
	return (dispatch) => {};
};

const setTrainingStarted = (workout) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_STARTED,
	payload: {
		...workout,
	},
});

const setTrainingFinishExercise = (exercise) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_FINISH_EXERCISE,
	payload: exercise,
});

export const setActiveExercise = (exercise) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_NEXT_EXERCISE,
	payload: exercise,
});
