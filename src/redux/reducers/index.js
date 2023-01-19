import { combineReducers } from 'redux';
import { dailyMacrosReducer } from './dailyMacros';
import { reportNutritionReducer } from './reportNutritionReducer';
import { userReducer } from './userReducer';

const reducers = combineReducers({
	userInfo: userReducer,
	dailyMacros: dailyMacrosReducer,
	reportNutrition: reportNutritionReducer,
});

export default reducers;
