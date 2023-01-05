import React from 'react';

import AddMealForm from './AddMealForm';

const OpenedMeal = ({ meal, onCloseOpened }) => {
	const { food, name } = meal;

	return (
		<div className='mt-2'>
			<ul className='ml-4 flex justify-start flex-wrap gap-8'>
				{food &&
					food.length !== 0 &&
					food.map((product) => (
						<li className='flex flex-col' key={product.name}>
							<span className='first-letter:capitalize'>
								{product.name} {product.weight} g
							</span>
							<span className='text-xs'>{product.calories} kcal</span>
						</li>
					))}
			</ul>
			<AddMealForm mealName={name} onCloseOpened={onCloseOpened} />
		</div>
	);
};

export default OpenedMeal;
