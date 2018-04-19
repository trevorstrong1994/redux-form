import React from 'react';
import { reduxForm } from 'redux-form'; 
import FormComponent from './form.component';

/** 
  * using handleSubmit() prop, which is a function that runs validation 
  *	and invokes a function we define and pass in with all of the form values
  * passed to it as a parameter
  */

export const FormContainer = ({ handleSubmit }) => {
	const submitForm = (formValues) => {
		console.log('submitting Form: ', formValues);
	}

	return (
		<FormComponent
			onSubmit={submitForm}
			handleSubmit={handleSubmit}
		/>
	);
}

const formConfiguration = {
	form: 'my-very-own-form'
}

//wraps the 'FormComponent' with Redux Form's 'reduxForm()' helper
//reduxForm() is a function that takes in a form configuration object
//and returns a HOC (higher-order component), a function that takes and returns a component
export default reduxForm(formConfiguration)(FormContainer);
