import React from 'react';
import { useMiltistepForm } from '../../../hooks/useMiltistepForm';
import { useForm } from 'react-hook-form';

import NutritionFormSteps from './NutritionFormSteps';
import FormStepButton from '../../formElements/FormStepButton';
import GoalStep from './GoalStep';
import ParametersStep from './ParametersStep';
import ActivityStep from './ActivityStep';

const NutritionUserDataForm = () => {
	const { step, steps, currentStepIndex, isFirstStep, isLastStep, back, next } =
		useMiltistepForm([<GoalStep />, <ParametersStep />, <ActivityStep />]);

	return (
		<div className=''>
			<NutritionFormSteps stepIndex={currentStepIndex} />
			<form>
				{step}
				<div className='flex justify-end'>
					{!isFirstStep && <FormStepButton text='Back' onClick={back} />}
					{isLastStep ? (
						<FormStepButton text='Submit' />
					) : (
						<FormStepButton text='Continue' onClick={next} />
					)}
				</div>
			</form>
		</div>
	);
};

export default NutritionUserDataForm;
