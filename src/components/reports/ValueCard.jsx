import React from 'react';
import { useTranslation } from 'react-i18next';

const ValueCard = ({ amount, value, valueName, img, color, active }) => {
	const { t } = useTranslation();

	return (
		<div
			className={`${color} p-5 w-[30vh] h-[18vh] rounded-2xl hover:scale-110 duration-300`}>
			<h3 className='font-bold text-lg text-center'>
				{t('nutrition.report.total')} {valueName} {t('nutrition.report.eaten')}
			</h3>
			<div className='flex items-center mt-4'>
				<img src={img} alt='calories' className='w-14 h-14' />
				<div className='ml-4'>
					<span className='font-bold text-2xl'>{amount}</span>
					<span className='font-bold text-xl ml-1'>{value}</span>
				</div>
			</div>
		</div>
	);
};

export default ValueCard;
