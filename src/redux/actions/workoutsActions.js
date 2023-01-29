import api from '../../features/api';
import { WorkoutsActionTypes } from '../constants/action-types';

export const setWorkouts = () => {
	return (dispatch) => {
		dispatch(setWorkoutsStarted());

		api
			.get('/training/mytrainings')
			.then((res) => {
				dispatch(setWorkoutsSuccess(res.data));
			})
			.catch((err) => {
				dispatch(setWorkoutsError(err));
			});
	};
};

const setWorkoutsStarted = () => {
	return { type: WorkoutsActionTypes.SET_WORKOUTS_STARTED, payload: {} };
};

const setWorkoutsSuccess = (payload) => {
	return { type: WorkoutsActionTypes.SET_WORKOUTS_SUCCESS, payload };
};

const setWorkoutsError = (error) => {
	return { type: WorkoutsActionTypes.SET_WORKOUTS_ERROR, payload: { error } };
};
