export const MIN_DEFFAULT = 3;

export const MIN_PASSWORD = 6;

export const EMAIL_PATTERN = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

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
			snacks: 'snacks',
			food: [],
			totalCalories: 0,
			totalCarbs: 0,
			totalProtein: 0,
			totalFats: 0,
		},
	},
};
