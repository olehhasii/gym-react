import React from 'react';

import MealsListItem from './MealsListItem';
import breakfastImg from '../../../assets/meals/breakfast.png';
import lunchImg from '../../../assets/meals/lunch.png';
import snacksImg from '../../../assets/meals/snacks.png';

const MealsList = () => {
	return (
		<div className='p-6 grow rounded-lg shadow-card flex flex-col gap-4 '>
			<MealsListItem img={breakfastImg} mealName='Breakfast' kcalValue={451} />
			<MealsListItem img={lunchImg} mealName='Lunch' kcalValue={451} />
			<MealsListItem img={breakfastImg} mealName='Dinner' kcalValue={451} />
			<MealsListItem img={snacksImg} mealName='Snacks' kcalValue={451} />
		</div>
	);
};

export default MealsList;
