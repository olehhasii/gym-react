import React from 'react';
import { FaDumbbell, FaRuler, FaRunning } from 'react-icons/fa';
import FormStep from '../../formElements/FormStep';

const NutritionFormSteps = ({ stepIndex }) => {
	return (
		<div className='flex py-6'>
			<FormStep
				text='Your Goals'
				icon={<FaDumbbell className='w-10 h-10 text-white' />}
				flexPosition='items-start'
				currentStep={true}
			/>
			<FormStep
				text='Parameters'
				icon={<FaRuler className='w-10 h-10 text-white' />}
				currentStep={stepIndex >= 1 ? true : false}
			/>
			<FormStep
				text='Activity'
				icon={<FaRunning className='w-10 h-10 text-white' />}
				flexPosition='items-end'
				currentStep={stepIndex === 2 ? true : false}
			/>
		</div>
	);
};

export default NutritionFormSteps;
