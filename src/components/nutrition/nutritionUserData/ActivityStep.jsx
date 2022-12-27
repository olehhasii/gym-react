import React from 'react';
import RadioInput from '../../formElements/RadioInput';

const ActivityStep = ({ register }) => {
	return (
		<div>
			<RadioInput
				id='sedentary'
				labelText='Sedentary lifestyle'
				value='sedentary'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='light'
				labelText='Light exercises (1-2 day per week)'
				value='light'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='moderate'
				labelText='Moderate exercises (3-5 day per week)'
				defaultChecked={true}
				value='moderate'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='heavy'
				labelText='Heavy exercises (5-7 day per week)'
				value='heavy'
				register={register}
				registerName='activityLevel'
			/>
		</div>
	);
};

export default ActivityStep;
