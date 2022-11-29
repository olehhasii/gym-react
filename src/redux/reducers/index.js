import { combineReducers } from 'redux';
import { useReducer } from './useReducer';

const reducers = combineReducers({
	user: useReducer,
});

export default reducers;
