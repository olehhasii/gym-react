import { TrainingSessionActionTypes } from '../constants/action-types';

const workout = {
	workoutName: 'Test',
	activeExercise: null,
	exercises: [
		{
			exerciseName: 'Test exercise 1',
			sets: 4,
			reps: 8,
			weight: 15,
			done: false,
		},
		{
			exerciseName: 'Test exercise',
			sets: 4,
			reps: 8,
			weight: 15,
			done: false,
		},
	],
};

export const trainingSessionReducer = (state = workout, { type, payload }) => {
	switch (type) {
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
		default:
			return state;
	}
};
