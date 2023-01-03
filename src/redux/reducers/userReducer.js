import { ActionTypes } from '../constants/action-types';

const initialState = {
	id: '',
	username: '',
	email: '',
	parameters: null,
	loading: false,
	error: null,
};

export const userReducer = (state = initialState, { type, payload }) => {
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
				parameters: payload.parameters,
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
