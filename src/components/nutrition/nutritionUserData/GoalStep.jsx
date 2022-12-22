import React from 'react';
import RadioInput from '../../formElements/RadioInput';

const GoalStep = () => {
	return (
		<div className='flex flex-col items-stretch'>
			<RadioInput id='lose' labelText='Lose weight' defaultChecked={true} />
			<RadioInput id='gain' labelText='Gain weight' />
			<RadioInput id='maintain' labelText='Maintain weight' />
		</div>
	);
};

export default GoalStep;
