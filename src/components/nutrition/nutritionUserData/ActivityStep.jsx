import React from 'react';
import { useTranslation } from 'react-i18next';
import RadioInput from '../../formElements/RadioInput';

const ActivityStep = ({ register }) => {
	const { t } = useTranslation();

	return (
		<div>
			<RadioInput
				id='sedentary'
				labelText={t('nutrition.params.form.sedentary')}
				value='sedentary'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='light'
				labelText={t('nutrition.params.form.light')}
				value='light'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='moderate'
				labelText={t('nutrition.params.form.moderate')}
				defaultChecked={true}
				value='moderate'
				register={register}
				registerName='activityLevel'
			/>
			<RadioInput
				id='heavy'
				labelText={t('nutrition.params.form.heavy')}
				value='heavy'
				register={register}
				registerName='activityLevel'
			/>
		</div>
	);
};

export default ActivityStep;
