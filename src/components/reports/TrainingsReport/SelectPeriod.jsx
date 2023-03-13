import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectPeriod = () => {
	const { t } = useTranslation();

	return (
		<div className='flex gap-6 mr-auto'>
			<label>
				<input type='radio' name='radio' checked className='peer hidden' />
				<div className='w-40 h-9 border border-gray-200 peer-checked:bg-green-300 rounded-xl flex justify-center items-center cursor-pointer ease-in duration-200'>
					<span className='font-bold text-lg'>
						{t('trainings.report.week')}
					</span>
				</div>
			</label>

			<label>
				<input type='radio' name='radio' className='peer hidden' />
				<div className='w-40 h-9 border border-gray-200 peer-checked:bg-green-300 rounded-xl flex justify-center items-center cursor-pointer ease-in duration-200'>
					<span className='font-bold text-lg'>
						{t('trainings.report.month')}
					</span>
				</div>
			</label>
		</div>
	);
};

export default SelectPeriod;
