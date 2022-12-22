import React from 'react';
import RadioInput from '../../formElements/RadioInput';

const ActivityStep = () => {
	return (
		<div>
			<RadioInput id='sedentary' labelText='Sedentary lifestyle' />
			<RadioInput id='light' labelText='Light exercises (1-2 day per week)' />
			<RadioInput
				id='moderate'
				labelText='Moderate exercises (3-5 day per week)'
				defaultChecked={true}
			/>
			<RadioInput id='heavy' labelText='Heavy exercises (5-7 day per week)' />
		</div>
	);
};

export default ActivityStep;
