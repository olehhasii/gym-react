import React from 'react';
import RadioInput from '../../formElements/RadioInput';

const GoalStep = ({ register }) => {
	return (
		<div className='flex flex-col items-stretch'>
			<RadioInput
				id='lose'
				labelText='Lose weight'
				defaultChecked={true}
				value='lose'
				register={register}
				registerName='goal'
			/>
			<RadioInput
				id='gain'
				labelText='Gain weight'
				value='gain'
				register={register}
				registerName='goal'
			/>
			<RadioInput
				id='maintain'
				labelText='Maintain weight'
				value='maintain'
				register={register}
				registerName='goal'
			/>
		</div>
	);
};

export default GoalStep;
