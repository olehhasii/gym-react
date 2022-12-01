import { combineReducers } from 'redux';
import { useReducer } from './useReducer';

const reducers = combineReducers({
	userInfo: useReducer,
});

export default reducers;
