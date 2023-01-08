import { MONTH_NAME, WEEK_DAYS } from '../constants/constatns';

export const dateToIsoSting = (date) => date.toISOString().split('T')[0];

export const getTodaysDate = () => new Date().toISOString().split('T')[0];

export const getPast6Days = () => {
	return [...Array(6).keys()]
		.map((index) => {
			const date = new Date();
			date.setDate(date.getDate() - (index + 1));

			return dateToIsoSting(date);
		})
		.reverse();
};

export const getNew6days = () => {
	return [...Array(6).keys()].map((index) => {
		const date = new Date();
		date.setDate(date.getDate() + (index + 1));

		return dateToIsoSting(date);
	});
};

export const getPreviousDay = (date = new Date()) => {
	const previous = new Date(date.getTime());
	previous.setDate(date.getDate() - 1);

	return dateToIsoSting(previous);
};

export const getNextDay = (date = new Date()) => {
	const next = new Date(date.getTime());
	next.setDate(date.getDate() + 1);

	return dateToIsoSting(next);
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
