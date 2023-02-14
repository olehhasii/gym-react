import { TrainingSessionActionTypes } from '../constants/action-types';

export const trainingSessionReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case TrainingSessionActionTypes.SET_TRAINING_STARTED:
			return { ...payload, activeExercise: null };
		case TrainingSessionActionTypes.SET_TRAINING_NEXT_EXERCISE:
			return { ...state, activeExercise: payload };
		case TrainingSessionActionTypes.SET_TRAINING_FINISH_EXERCISE:
			return { ...payload };
		case TrainingSessionActionTypes.SET_EXISTING_TRAINING_SESSION:
			return { ...payload };
		case TrainingSessionActionTypes.SET_TRAINING_END:
			return {};
		default:
			return state;
	}
};
