import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FaChevronRight } from 'react-icons/fa';
import { useSelector } from 'react-redux';

import OpenedMeal from './OpenedMeal';

const MealsListItem = ({ img, mealName, mealTxt }) => {
	const [active, setIsActive] = useState(false);

	const meal = useSelector((state) => state.dailyMacros.meals[mealName]);

	const { t } = useTranslation();

	return (
		<div className='shadow-card rounded-md p-3'>
			<div className='flex items-center justify-between h-16'>
				<div className='flex items-center'>
					<img src={img} alt='meal' className='w-12 h-12' />
					<div className='ml-5'>
						<h3 className='font-bold first-letter:capitalize'>{mealTxt}</h3>
						{meal.totalCalories !== 0 && (
							<>
								<span className=''>{meal.totalCalories} kcal / </span>
								<span>
									{t('nutrition.macros.carbs')} -{' '}
									{meal.totalCarbs ? meal.totalCarbs : 0}g/{' '}
								</span>
								<span>
									{t('nutrition.macros.protein')} -{' '}
									{meal.totalProtein ? meal.totalProtein : 0}g/{' '}
								</span>
								<span>
									{t('nutrition.macros.fats')} -{' '}
									{meal.totalFats ? meal.totalFats : 0}g
								</span>
							</>
						)}
						{!meal.totalCalories && (
							<span className='text-sm font-bold'>
								{t('nutrition.macros.noData')}
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
			{active && (
				<OpenedMeal meal={meal} onCloseOpened={() => setIsActive(false)} />
			)}
		</div>
	);
};

export default MealsListItem;
