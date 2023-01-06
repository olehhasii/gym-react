import { MONTH_NAME, WEEK_DAYS } from '../constants/constatns';

export const dateToIsoSting = (date) => date.toISOString().split('T')[0];

export const getTodaysDate = () => new Date().toISOString().split('T')[0];

export const getPast6Days = () => {
	return [...Array(6).keys()]
		.map((index) => {
			const date = new Date();
			date.setDate(date.getDate() - (index + 1));

			return date.toISOString().split('T')[0];
		})
		.reverse();
};

export const getNew6days = () => {
	return [...Array(6).keys()].map((index) => {
		const date = new Date();
		date.setDate(date.getDate() + (index + 1));

		return date.toISOString().split('T')[0];
	});
};

export const getDayName = (date) => {
	return WEEK_DAYS[new Date(date).getDay()];
};

export const getMonthName = (date) => {
	return MONTH_NAME[new Date(date).getMonth()];
};

export const getDateNumber = (date) => {
	return new Date(date).getDate();
};
