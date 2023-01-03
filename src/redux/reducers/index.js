import { combineReducers } from 'redux';
import { dailyMacrosReducer } from './dailyMacros';
import { userReducer } from './userReducer';

const reducers = combineReducers({
	userInfo: userReducer,
	dailyMacros: dailyMacrosReducer,
});

export default reducers;
