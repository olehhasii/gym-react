import React from 'react';
import { useTranslation } from 'react-i18next';
import { FaDumbbell, FaRuler, FaRunning } from 'react-icons/fa';
import FormStep from '../../formElements/FormStep';

const NutritionFormSteps = ({ stepIndex }) => {
	const { t } = useTranslation();

	return (
		<div className='flex py-6'>
			<FormStep
				text={t('nutrition.params.form.goals')}
				icon={<FaDumbbell className='w-10 h-10 text-white' />}
				flexPosition='items-start'
				currentStep={true}
			/>
			<FormStep
				text={t('nutrition.params.form.parameters')}
				icon={<FaRuler className='w-10 h-10 text-white' />}
				currentStep={stepIndex >= 1 ? true : false}
			/>
			<FormStep
				text={t('nutrition.params.form.activity')}
				icon={<FaRunning className='w-10 h-10 text-white' />}
				flexPosition='items-end'
				currentStep={stepIndex === 2 ? true : false}
			/>
		</div>
	);
};

export default NutritionFormSteps;
