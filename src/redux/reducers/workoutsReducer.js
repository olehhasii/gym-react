import { WorkoutsActionTypes } from '../constants/action-types';

export const workoutsReducer = (
	state = { workouts: [], loading: false, error: null },
	{ type, payload }
) => {
	switch (type) {
		case WorkoutsActionTypes.SET_WORKOUTS_STARTED:
			return { ...state, loading: true };
		case WorkoutsActionTypes.SET_WORKOUTS_SUCCESS:
			return { workouts: [...payload], loading: false, error: null };
		case WorkoutsActionTypes.SET_WORKOUTS_ERROR:
			return { ...state, loading: false, error: payload.error };
		default:
			return state;
	}
};
