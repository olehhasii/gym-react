import { combineReducers } from 'redux';
import { dailyMacrosReducer } from './dailyMacrosReducer';
import { reportNutritionReducer } from './reportNutritionReducer';
import { userReducer } from './userReducer';
import { workoutsReducer } from './workoutsReducer';

const reducers = combineReducers({
	userInfo: userReducer,
	dailyMacros: dailyMacrosReducer,
	reportNutrition: reportNutritionReducer,
	workouts: workoutsReducer,
});

export default reducers;
