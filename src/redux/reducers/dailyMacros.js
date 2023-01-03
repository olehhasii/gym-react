import { initialDailyMacrosState } from '../../constants/constatns';
import { DailyMacrosActionTypes } from '../constants/action-types';

export const dailyMacrosReducer = (
	state = { ...initialDailyMacrosState, loading: false, error: null },
	{ type, payload }
) => {
	switch (type) {
		case DailyMacrosActionTypes.SET_DAILY_MACROS_STARTED:
			return { ...state, loading: true };
		case DailyMacrosActionTypes.SET_DAILY_MACROS_SUCCESS:
			return { ...payload, loading: false, error: null };
		case DailyMacrosActionTypes.SET_DAILY_MACROS_ERROR:
			return { ...state, loading: false, error: payload.error };
		default:
			return state;
	}
};
