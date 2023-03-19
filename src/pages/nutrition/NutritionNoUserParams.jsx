import React from 'react';
import { useTranslation } from 'react-i18next';

import img from '../../assets/food_6.jpg';
import NutritionUserDataForm from '../../components/nutrition/nutritionUserData/NutritionUserDataForm';

const NutritionNoUserParams = () => {
	const { t } = useTranslation();

	return (
		<div className='flex'>
			<img
				src={img}
				alt='food'
				className='h-[calc(100vh_-_4rem)] hidden lg:block'
			/>
			<div className='p-14 py-12 w-full'>
				<div>
					<h1 className='font-bold text-3xl mb-2'>
						{t('nutrition.params.title')}
					</h1>
					<p className='text-md'>{t('nutrition.params.description')}</p>
				</div>
				<NutritionUserDataForm />
			</div>
		</div>
	);
};

export default NutritionNoUserParams;
