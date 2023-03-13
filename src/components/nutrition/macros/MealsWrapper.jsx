import React from 'react';

import MealsListItem from './MealsListItem';
import breakfastImg from '../../../assets/meals/breakfast.png';
import lunchImg from '../../../assets/meals/lunch.png';
import snacksImg from '../../../assets/meals/snacks.png';
import dinnerImg from '../../../assets/meals/dinner.png';
import { useTranslation } from 'react-i18next';

const MealsWrapper = () => {
	const { t } = useTranslation();

	return (
		<div className='h-[500px] p-6 grow rounded-lg shadow-card flex flex-col justify-start gap-5 overflow-auto'>
			<MealsListItem
				img={breakfastImg}
				mealName='breakfast'
				mealTxt={t('nutrition.macros.breakfast')}
			/>
			<MealsListItem
				img={lunchImg}
				mealName='lunch'
				mealTxt={t('nutrition.macros.lunch')}
			/>
			<MealsListItem
				img={dinnerImg}
				mealName='dinner'
				mealTxt={t('nutrition.macros.dinner')}
			/>
			<MealsListItem
				img={snacksImg}
				mealName='snacks'
				mealTxt={t('nutrition.macros.snacks')}
			/>
		</div>
	);
};

export default MealsWrapper;
