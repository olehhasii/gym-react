import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import OpenedMeal from './OpenedMeal';

const MealsListItem = ({ img, mealName }) => {
	const [active, setIsActive] = useState(false);

	const meal = useSelector((state) => state.dailyMacros.meals[mealName]);
	console.log(meal);
	return (
		<div className='shadow-card rounded-md p-3'>
			<div className='flex items-center justify-between h-16'>
				<div className='flex items-center'>
					<img src={img} alt='meal' className='w-12 h-12' />
					<div className='ml-5'>
						<h3 className='font-bold first-letter:capitalize'>{mealName}</h3>
						{meal.caloriesConsumed && (
							<>
								<span className=''>{meal.totalCalories} kcal / </span>
								<span>Carbs - {meal.totalCarbs ? meal.totalCarbs : 0}g/ </span>
								<span>
									Protein - {meal.totalProtein ? meal.totalProtein : 0}g/{' '}
								</span>
								<span>Fats - {meal.totalFats ? meal.totalFats : 0}g</span>
							</>
						)}
						{!meal.caloriesConsumed && (
							<span className='text-sm font-bold'>
								No data, please add products.
							</span>
						)}
					</div>
				</div>
				<FaChevronRight
					className={`${
						active && 'rotate-90'
					} w-6 h-6  hover:scale-125 cursor-pointer duration-300`}
					onClick={() => setIsActive((state) => !state)}
				/>
			</div>
			{active && <OpenedMeal meal={meal} />}
		</div>
	);
};

export default MealsListItem;
