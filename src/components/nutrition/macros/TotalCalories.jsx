import React from 'react';

import { useSelector } from 'react-redux';
import ProgressBar from '../../ui/ProgressBar';
import ProgressCircle from '../../ui/ProgressCircle';
import carbsImg from '../../../assets/macros/carbs.png';
import proteinImg from '../../../assets/macros/protein.png';
import fatsImg from '../../../assets/macros/fats.png';

const TotalCalories = () => {
	const { caloriesPerDay, carbs, protein, fats } = useSelector(
		(state) => state.userInfo.parameters.macros
	);
	const { caloriesConsumed, proteinConsumed, fatsConsumed, carbsConsumed } =
		useSelector((state) => state.dailyMacros);

	return (
		<div className='w-1/2 max-h-96 p-8 px-12 rounded-lg shadow-card flex flex-col gap-4'>
			<div className='flex justify-between items-center'>
				<div className='relative flex flex-col items-center'>
					<span className='text-xl font-bold'>Eaten</span>
					<span className='text-xl'>{caloriesConsumed} kcal</span>
				</div>
				<div className='w-40 h-40'>
					<ProgressCircle
						total={caloriesPerDay}
						current={caloriesConsumed}
						valueName='kcal'
					/>
				</div>
				<div className='relative flex flex-col items-center'>
					<span className='text-xl font-bold'>Left</span>
					<span className='text-xl '>
						{caloriesPerDay - caloriesConsumed} kcal
					</span>
				</div>
			</div>
			<hr className='h-0.5 bg-green-400' />
			<div className='flex justify-between mt-8'>
				<ProgressBar
					label='Carbs'
					current={carbsConsumed}
					total={carbs}
					img={carbsImg}
					color='bg-sky-400'
				/>
				<ProgressBar
					label='Protein'
					current={proteinConsumed}
					total={protein}
					img={proteinImg}
					color='bg-rose-500'
				/>
				<ProgressBar
					label='Fats'
					current={fatsConsumed}
					total={fats}
					img={fatsImg}
					color='bg-orange-500'
				/>
			</div>
		</div>
	);
};

export default TotalCalories;
