import React from 'react';

import MealsListItem from './MealsListItem';
import breakfastImg from '../../../assets/meals/breakfast.png';
import lunchImg from '../../../assets/meals/lunch.png';
import snacksImg from '../../../assets/meals/snacks.png';
import dinnerImg from '../../../assets/meals/dinner.png';

const MealsWrapper = () => {
	return (
		<div className='h-[500px] p-6 grow rounded-lg shadow-card flex flex-col justify-start gap-5 overflow-auto'>
			<MealsListItem
				img={breakfastImg}
				mealName='Breakfast'
				kcalValue={451}
				protein={50}
				carbs={79}
				fats={24}
			/>
			<MealsListItem img={lunchImg} mealName='Lunch' kcalValue={451} />
			<MealsListItem img={dinnerImg} mealName='Dinner' kcalValue={451} />
			<MealsListItem img={snacksImg} mealName='Snacks' kcalValue={451} />
		</div>
	);
};

export default MealsWrapper;
