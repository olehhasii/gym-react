import api from '../../features/api';
import { TrainingSessionActionTypes } from '../constants/action-types';

export const setTrainingSession = (workout) => {
	return (dispatch) => {
		dispatch(setTrainingStarted(workout));
		api
			.put('/training-session/init', workout)
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};
};

export const setTrainingStarted = (workout) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_STARTED,
	payload: {
		...workout,
	},
});

export const setTrainingFinishExercise = (exercise) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_FINISH_EXERCISE,
	payload: exercise,
});

export const setActiveExercise = (exercise) => ({
	type: TrainingSessionActionTypes.SET_TRAINING_NEXT_EXERCISE,
	payload: exercise,
});

export const setExistingTrainingSession = (workout) => ({
	type: TrainingSessionActionTypes.SET_EXISTING_TRAINING_SESSION,
	payload: {
		...workout,
	},
});
