import { TrainingSessionActionTypes } from '../constants/action-types';

const workout = {
	workoutName: 'Test',
	activeExercise: null,
	exercises: [
		{
			exerciseName: 'Test exercise',
			sets: 4,
			reps: 8,
			weight: 15,
		},
		{
			exerciseName: 'Test exercise',
			sets: 4,
			reps: 8,
			weight: 15,
		},
	],
};

export const trainingSessionReducer = (state = workout, { type, payload }) => {
	switch (type) {
		case TrainingSessionActionTypes.SET_TRAINING_NEXT_EXERCISE:
			return { ...state, activeExercise: payload };

		default:
			return state;
	}
};
