import { initialDailyMacrosState } from '../../constants/constatns';
import api from '../../features/api';
import { DailyMacrosActionTypes } from '../constants/action-types';

export const setDailyMacros = (date) => {
	return (dispatch) => {
		dispatch(setDailyMacrosStared());

		api
			.get(`/meals/get/${date}`)
			.then((res) => {
				if (res.data) {
					dispatch(setDailyMacrosSuccess(res.data));
				} else {
					api
						.post('/meals/initial', { ...initialDailyMacrosState, date: date })
						.then((res) => {
							console.log(res.data);
							dispatch(setDailyMacrosSuccess(res.data));
						})
						.catch((err) => dispatch(setDailyMacrosError(err)));
				}
			})
			.catch((err) => dispatch(setDailyMacrosError(err)));
	};
};

const setDailyMacrosSuccess = (dailyMacros) => ({
	type: DailyMacrosActionTypes.SET_DAILY_MACROS_SUCCESS,
	payload: {
		...dailyMacros,
	},
});

const setDailyMacrosStared = () => ({
	type: DailyMacrosActionTypes.SET_DAILY_MACROS_STARTED,
	payload: {},
});

const setDailyMacrosError = (error) => ({
	type: DailyMacrosActionTypes.SET_DAILY_MACROS_ERROR,
	payload: {
		error,
	},
});
