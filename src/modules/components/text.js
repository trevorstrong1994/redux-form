import React from 'react';

//returns a component that receives props from Redux Form's Field component
//and renders an input tag

export const Text = ({ label, input }) => {
	console.log('inputStuff: ', input);
	return (
		<div>
			<div>
				{label}
			</div>
			<div>
				<input {...input} placeholder={label} type="text" />
			</div>
		</div>
	);
}

export default Text;