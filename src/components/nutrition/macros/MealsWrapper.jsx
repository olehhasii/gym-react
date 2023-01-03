import React from 'react';

import MealsListItem from './MealsListItem';
import breakfastImg from '../../../assets/meals/breakfast.png';
import lunchImg from '../../../assets/meals/lunch.png';
import snacksImg from '../../../assets/meals/snacks.png';
import dinnerImg from '../../../assets/meals/dinner.png';

const MealsWrapper = () => {
	return (
		<div className='h-[500px] p-6 grow rounded-lg shadow-card flex flex-col justify-start gap-5 overflow-auto'>
			<MealsListItem img={breakfastImg} mealName='breakfast' />
			<MealsListItem img={lunchImg} mealName='lunch' />
			<MealsListItem img={dinnerImg} mealName='dinner' />
			<MealsListItem img={snacksImg} mealName='snacks' />
		</div>
	);
};

export default MealsWrapper;
