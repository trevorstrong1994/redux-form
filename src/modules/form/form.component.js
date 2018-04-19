import React, { Component } from 'react';
import { Field } from 'redux-form';
import { Grid, Row, Col } from 'react-bootstrap';
import Text from '../components/text';
import '../styles/form.css';
import '../styles/form.scss';

export const FormComponent = ({ handleSubmit, onSubmit }) => {
	return (
		<Grid>
			<Row className="show-grid">
				<Col xs={12} md={8}>
				<div className="title">
					<h1>Form</h1>
				</div>
					<div className="form-section">
						<form onSubmit={handleSubmit(onSubmit)}>
						<Field
							name="firstName"
							label="First Name"
							component={Text}
						/>
						<Field
				        	name="lastName"
				          	label="Last Name"
				          	component={Text}
				        />
				        <Field
				          	name="email"
				          	label="Email"
				          	component={Text}
				        />
						<button type="submit">Submit</button>
						</form>
					</div>
				</Col>
			</Row>
		</Grid>	
	);
}

export default FormComponent;