import { ActionTypes } from '../constants/action-types';

const initialState = {
	id: '',
	username: '',
	email: '',
	loading: false,
	error: null,
};

export const useReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_USER_STARTED:
			return {
				...state,
				loading: true,
			};
		case ActionTypes.SET_USER_SUCCESS:
			return {
				...state,
				id: payload._id,
				username: payload.username,
				email: payload.email,
				loading: false,
			};
		case ActionTypes.SET_USER_ERROR:
			return {
				...state,
				error: payload.error,
			};
		default:
			return state;
	}
};
