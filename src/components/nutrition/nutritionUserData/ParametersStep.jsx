import React from 'react';

import RadioInput from '../../formElements/RadioInput';
import FormInput from '../../formElements/FormInput';

const ParametersStep = () => {
	return (
		<>
			<div>
				<RadioInput id='male' labelText='Male' />
				<RadioInput id='female' labelText='Female' />
			</div>
			<div className='flex flex-wrap justify-between'>
				<FormInput type='number' placeholder='Age' />
				<FormInput type='number' placeholder='Height' />
				<FormInput type='number' placeholder='Weight' />
				<FormInput type='number' placeholder='Body fat % (Optional)' />
			</div>
		</>
	);
};

export default ParametersStep;
