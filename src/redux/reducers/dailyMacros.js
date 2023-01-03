const initialState = {
	caloriesConsumed: 0,
	carbsConsumed: 0,
	proteinConsumed: 0,
	fatsConsumed: 0,
	meals: {
		breakfast: { name: 'breakfast' },
		lunch: { name: 'lunch' },
		dinner: { name: 'dinner' },
		snacks: { snacks: 'snacks' },
	},
};

export const dailyMacrosReducer = (state = initialState, { type, payload }) => {
	return state;
};
