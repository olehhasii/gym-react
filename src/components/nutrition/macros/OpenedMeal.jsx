import React, { useState } from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import AddMealForm from './AddMealForm';

const OpenedMeal = ({ meal }) => {
	const { food, totalCarbs, totalCalories, totalProtein, totalFats, name } =
		meal;
	const [productInputs, setProductInputs] = useState(1);

	return (
		<div className='mt-2'>
			<ul className='flex justify-around flex-wrap'>
				{food.map((product) => (
					<li className='flex flex-col' key={product.name}>
						<span className='first-letter:capitalize'>
							{product.name} {product.weight} g
						</span>
						<span className='text-xs'>{product.calories} kcal</span>
					</li>
				))}
			</ul>
			<AddMealForm />
		</div>
	);
};

export default OpenedMeal;
