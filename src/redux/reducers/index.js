import { combineReducers } from 'redux';
import { dailyMacrosReducer } from './dailyMacrosReducer';
import { reportNutritionReducer } from './reportNutritionReducer';
import { trainingSessionReducer } from './trainingSessionReducer';
import { userReducer } from './userReducer';
import { workoutsReducer } from './workoutsReducer';

const reducers = combineReducers({
	userInfo: userReducer,
	dailyMacros: dailyMacrosReducer,
	reportNutrition: reportNutritionReducer,
	workouts: workoutsReducer,
	trainingSession: trainingSessionReducer,
});

export default reducers;
