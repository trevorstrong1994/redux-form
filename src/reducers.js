import { combineReducers } from 'redux';  
import { reducer as formReducer } from 'redux-form';

//exports a function that combines all reducers into one.

export default function createReducer(extraReducerObjects = {}) {
	return combineReducers({
		form: formReducer,
		...extraReducerObjects
	});
}