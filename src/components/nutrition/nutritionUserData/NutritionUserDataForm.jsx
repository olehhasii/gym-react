import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import { useMiltistepForm } from '../../../hooks/useMiltistepForm';
import NutritionFormSteps from './NutritionFormSteps';
import FormStepButton from '../../formElements/FormStepButton';
import GoalStep from './GoalStep';
import ParametersStep from './ParametersStep';
import ActivityStep from './ActivityStep';
import api from '../../../features/api';

import { setUser } from '../../../redux/actions/userActions';

const NutritionUserDataForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const { step, currentStepIndex, isFirstStep, isLastStep, back, next } =
		useMiltistepForm([
			<GoalStep register={register} />,
			<ParametersStep register={register} errors={errors} />,
			<ActivityStep register={register} />,
		]);

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		if (!isLastStep) return next();
		api.patch('/user/add-parameters', data).then((res) => {
			dispatch(setUser(res.data));
		});
	};

	return (
		<div className=''>
			<NutritionFormSteps stepIndex={currentStepIndex} />
			<form onSubmit={handleSubmit(onSubmit)}>
				{step}
				<div className='flex justify-end'>
					{!isFirstStep && <FormStepButton text='Back' onClick={back} />}
					{isLastStep ? (
						<FormStepButton text='Submit' type='submit' />
					) : (
						<FormStepButton type='submit' text='Continue' />
					)}
				</div>
			</form>
		</div>
	);
};

export default NutritionUserDataForm;
