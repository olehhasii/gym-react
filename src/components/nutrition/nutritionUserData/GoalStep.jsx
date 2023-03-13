import React from 'react';
import { useTranslation } from 'react-i18next';
import RadioInput from '../../formElements/RadioInput';

const GoalStep = ({ register }) => {
	const { t } = useTranslation();

	return (
		<div className='flex flex-col items-stretch'>
			<RadioInput
				id='lose'
				labelText={t('nutrition.params.form.loseWeight')}
				defaultChecked={true}
				value='lose'
				register={register}
				registerName='goal'
			/>
			<RadioInput
				id='gain'
				labelText={t('nutrition.params.form.gainWeigth')}
				value='gain'
				register={register}
				registerName='goal'
			/>
			<RadioInput
				id='maintain'
				labelText={t('nutrition.params.form.maintainWeight')}
				value='maintain'
				register={register}
				registerName='goal'
			/>
		</div>
	);
};

export default GoalStep;
