import React from 'react';

import RadioInput from '../../formElements/RadioInput';
import FormInput from '../../formElements/FormInput';
import { useTranslation } from 'react-i18next';

const ParametersStep = ({ register, errors }) => {
	const { t } = useTranslation();

	return (
		<>
			<div>
				<RadioInput
					id='male'
					labelText={t('nutrition.params.form.male')}
					value='male'
					register={register}
					registerName='gender'
					defaultChecked={true}
				/>

				<RadioInput
					id='female'
					labelText={t('nutrition.params.form.female')}
					value='female'
					register={register}
					registerName='gender'
				/>
			</div>
			<div className='flex flex-wrap justify-between items-end'>
				<div className='flex flex-col'>
					{errors.age && (
						<span className='text-red-600'>Age is required, min 1/max 99</span>
					)}
					<FormInput
						type='number'
						placeholder={t('nutrition.params.form.age')}
						register={register}
						registerName='age'
						required={true}
						min={1}
						max={99}
					/>
				</div>
				<div className='flex flex-col'>
					{errors.height && (
						<span className='text-red-600'>
							Height is required, min 50/max 250
						</span>
					)}
					<FormInput
						type='number'
						placeholder={t('nutrition.params.form.height')}
						register={register}
						registerName='height'
						required={true}
						min={50}
						max={250}
					/>
				</div>
				<div className='flex flex-col'>
					{errors.weight && (
						<span className='text-red-600'>
							Weight is required, min 10/max 500
						</span>
					)}
					<FormInput
						type='number'
						placeholder={t('nutrition.params.form.weight')}
						register={register}
						registerName='weight'
						required={true}
						min={10}
						max={500}
					/>
				</div>
				<div className='flex flex-col'>
					{errors.bodyFat && <span className='text-red-600'>min 1/max 70</span>}
					<FormInput
						type='number'
						placeholder={t('nutrition.params.form.bodyFat')}
						register={register}
						registerName='bodyFat'
						min={1}
						max={70}
					/>
				</div>
			</div>
		</>
	);
};

export default ParametersStep;
