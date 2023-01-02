import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaChevronRight } from 'react-icons/fa';
import OpenedMeal from './OpenedMeal';

const meal = {
	name: 'breakfast',
	food: [
		{ name: 'apple', weight: 50, calories: 30, protein: 2, carbs: 15, fats: 5 },
		{ name: 'apple', weight: 50, calories: 30, protein: 2, carbs: 15, fats: 5 },
		{ name: 'apple', weight: 50, calories: 30, protein: 2, carbs: 15, fats: 5 },
	],
	totalCalories: 291,
	totalProtein: 50,
	totalFats: 23,
	totalCarbs: 70,
};

const MealsListItem = ({ img, kcalValue, mealName, protein, carbs, fats }) => {
	const [active, setIsActive] = useState(false);

	return (
		<div className='shadow-card rounded-md p-3'>
			<div className='flex items-center justify-between h-16'>
				<div className='flex items-center'>
					<img src={img} alt='meal' className='w-12 h-12' />
					<div className='ml-5'>
						<h3 className='font-bold'>{mealName}</h3>
						<span className=''>{kcalValue} kcal / </span>
						<span>Carbs - {carbs ? carbs : 0}g/ </span>
						<span>Protein - {protein ? protein : 0}g/ </span>
						<span>Fats - {fats ? fats : 0}g</span>
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
