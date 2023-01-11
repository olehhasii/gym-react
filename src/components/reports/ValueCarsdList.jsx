import React from 'react';

import ValueCard from '../../components/reports/ValueCard';
import caloriesImg from '../../assets/macros/calories.png';
import proteinImg from '../../assets/macros/protein.png';
import carbsImg from '../../assets/macros/carbs.png';
import fastImg from '../../assets/macros/fats.png';

const ValueCarsdList = () => {
	return (
		<div className='flex flex-col gap-6'>
			<ValueCard
				amount={14578}
				value='kcal'
				valueName='Calories'
				img={caloriesImg}
				color='bg-green-200'
			/>
			<ValueCard
				amount={1124}
				value='g'
				valueName='Protein'
				img={proteinImg}
				color='bg-red-300'
			/>
			<ValueCard
				amount={1124}
				value='g'
				valueName='Carbs'
				img={carbsImg}
				color='bg-blue-200'
			/>
			<ValueCard
				amount={1124}
				value='g'
				valueName='Fats'
				img={fastImg}
				color='bg-yellow-200'
			/>
		</div>
	);
};

export default ValueCarsdList;
