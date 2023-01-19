import { getFirstAndLastDayOfWeek } from '../../helpers/dates';
import { ReportNutritionTypes } from '../constants/action-types';

export const reportNutritionReducer = (
	state = {
		loading: false,
		error: null,
		timeLine: 'weel',
		...getFirstAndLastDayOfWeek(),
	},
	{ type, payload }
) => {
	switch (type) {
		case ReportNutritionTypes.SET_REPORT_NUTRITION_STARTED:
			return { ...state, loading: true };
		case ReportNutritionTypes.SET_REPORT_NUTRITION_SUCCESS:
			return { ...payload, loading: false, error: null };
		case ReportNutritionTypes.SET_REPORT_NUTRITION_ERROR:
			return { ...state, loading: false, error: payload.error };
		case ReportNutritionTypes.SET_REPORT_TIME_LINE: {
			return {
				...state,
				timeLine: payload.timeLine,
				startDate: payload.startDate,
				endDate: payload.endDate,
			};
		}
		default:
			return state;
	}
};
