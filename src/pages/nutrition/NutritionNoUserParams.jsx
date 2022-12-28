import React from 'react';

import img from '../../assets/food_6.jpg';
import NutritionUserDataForm from '../../components/nutrition/nutritionUserData/NutritionUserDataForm';

const NutritionNoUserParams = () => {
	return (
		<div className='flex'>
			<img src={img} alt='food' className='h-[calc(100vh_-_4rem)]' />
			<div className='p-14 py-12 w-full'>
				<div>
					<h1 className='font-bold text-3xl mb-2'>
						Start tracking your daily nutrition!
					</h1>
					<p className='text-md'>
						Tell about yourself and your goals, so we can provide you recomended
						daily calories intake.
					</p>
				</div>
				<NutritionUserDataForm />
			</div>
		</div>
	);
};

export default NutritionNoUserParams;
