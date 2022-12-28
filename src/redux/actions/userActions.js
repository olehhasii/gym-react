import axios from 'axios';
import { ActionTypes } from '../constants/action-types';

export const setUser = () => {
	return (dispatch) => {
		dispatch(setUserStarted());

		axios
			.get('http://localhost:4000/me', {
				withCredentials: true,
			})
			.then((res) => {
				console.log(res.data);
				dispatch(setUserSuccess(res.data));
			})
			.catch((err) => {
				dispatch(setUserError(err));
			});
	};
};

const setUserSuccess = (user) => ({
	type: ActionTypes.SET_USER_SUCCESS,
	payload: {
		...user,
	},
});

const setUserStarted = () => ({
	type: ActionTypes.SET_USER_STARTED,
	payload: {},
});

const setUserError = (error) => ({
	type: ActionTypes.SET_USER_ERROR,
	payload: {
		error,
	},
});
