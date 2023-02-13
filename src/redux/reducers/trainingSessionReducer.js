import { TrainingSessionActionTypes } from '../constants/action-types';

export const trainingSessionReducer = (state = {}, { type, payload }) => {
	switch (type) {
		case TrainingSessionActionTypes.SET_TRAINING_STARTED:
			return { ...payload, activeExercise: null };
		case TrainingSessionActionTypes.SET_TRAINING_NEXT_EXERCISE:
			return { ...state, activeExercise: payload };
		case TrainingSessionActionTypes.SET_TRAINING_FINISH_EXERCISE:
			return {
				...state,
				activeExercise: null,
				exercises: state.exercises.map((exercise) => {
					if (exercise.exerciseName === payload.exerciseName) {
						return payload;
					} else return exercise;
				}),
			};
		case TrainingSessionActionTypes.SET_EXISTING_TRAINING_SESSION:
			return { ...payload };
		default:
			return state;
	}
};
