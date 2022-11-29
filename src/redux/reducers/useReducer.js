import { ActionTypes } from '../constants/action-types';

const initialState = {
	user: {
		id: '',
		name: '',
		email: '',
	},
};

export const useReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ActionTypes.SET_USER:
			return state;
		default:
			return state;
	}
};
