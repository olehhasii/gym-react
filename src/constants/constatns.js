export const MIN_DEFFAULT = 3;

export const MIN_PASSWORD = 6;

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const WEEK_DAYS = ['Sund', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const MONTH_NAME = [
	'Jan',
	'Feb',
	'March',
	'April',
	'May',
	'June',
	'July',
	'Aug',
	'Sept',
	'Oct',
	'Nov',
	'Dec',
];

export const initialDailyMacrosState = {
	date: new Date().toISOString().split('T')[0],
	caloriesConsumed: 0,
	carbsConsumed: 0,
	proteinConsumed: 0,
	fatsConsumed: 0,
	meals: {
		breakfast: {
			name: 'breakfast',
			food: [],
			totalCalories: 0,
			totalCarbs: 0,
			totalProtein: 0,
			totalFats: 0,
		},
		lunch: {
			name: 'lunch',
			food: [],
			totalCalories: 0,
			totalCarbs: 0,
			totalProtein: 0,
			totalFats: 0,
		},
		dinner: {
			name: 'dinner',
			food: [],
			totalCalories: 0,
			totalCarbs: 0,
			totalProtein: 0,
			totalFats: 0,
		},
		snacks: {
			name: 'snacks',
			food: [],
			totalCalories: 0,
			totalCarbs: 0,
			totalProtein: 0,
			totalFats: 0,
		},
	},
};

export const MUSCLES_OPTIONS = [
	{ label: 'Back', value: 'back' },
	{ label: 'Biceps', value: 'biceps' },
	{ label: 'Triceps', value: 'triceps' },
	{ label: 'Chest', value: 'chest' },
	{ label: 'Legs', value: 'legs' },
	{ label: 'Shoulders', value: 'shoulders' },
];

export const DAYS_OPTION = [
	{ label: 'Monday', value: 1 },
	{ label: 'Tuesday', value: 2 },
	{ label: 'Wednesday', value: 3 },
	{ label: 'Thursday', value: 4 },
	{ label: 'Friday', value: 5 },
	{ label: 'Saturday', value: 6 },
	{ label: 'Sunday', value: 0 },
];
