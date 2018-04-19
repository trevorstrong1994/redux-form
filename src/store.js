import { createStore, applyMiddleware, compose } from 'redux';
import createReducer from './reducers';

/** exports a function that congigures a store
  * set up so it is easy to plug in middleware and enhancers like 'Redux Devtools'
  */

const composeEnhancers = 
	typeof window === 'object' &&
	(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
		: compose);

export function configureStore() {
	const middlewares = [];
	const store = createStore(
		createReducer(),
		{},
		composeEnhancers(applyMiddleware(...middlewares))
	);
	return store;
}

export default configureStore;