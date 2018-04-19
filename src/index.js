import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//entry point - where we will wrap the main component, FormContainer,
//with our Redux storem and render the app onto the page using ReactDom

import FormContainer from './modules/form/form.container';
import configureStore from './store';

const store = configureStore();

ReactDOM.render(
	<Provider store={store}>
		<FormContainer />
	</Provider>,
	document.getElementById('root')
);
