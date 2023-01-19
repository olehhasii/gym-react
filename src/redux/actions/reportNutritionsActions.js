import api from '../../features/api';
import { ReportNutritionTypes } from '../constants/action-types';

export const setReportNutrition = (dateRange) => {
	return (dispatch) => {
		dispatch(setReportNutritionStarted());

		api
			.put('/reports-nutrition', dateRange)
			.then((res) => {
				dispatch(setReportNutritionSuccess(res.data));
			})
			.catch((err) => dispatch(setReportNutritionError(err)));
	};
};

const setReportNutritionStarted = () => ({
	type: ReportNutritionTypes.SET_REPORT_NUTRITION_STARTED,
	payload: {},
});

const setReportNutritionSuccess = (report) => ({
	type: ReportNutritionTypes.SET_REPORT_NUTRITION_SUCCESS,
	payload: report,
});

const setReportNutritionError = (error) => ({
	type: ReportNutritionTypes.SET_REPORT_NUTRITION_ERROR,
	payload: { error },
});

export const setReportNutritionTimeLine = (payload) => ({
	type: ReportNutritionTypes.SET_REPORT_TIME_LINE,
	payload,
});
