import React from 'react';

import { useSelector } from 'react-redux';
import ProgressBar from '../../ui/ProgressBar';
import ProgressCircle from '../../ui/ProgressCircle';
import carbsImg from '../../../assets/macros/carbs.png';
import proteinImg from '../../../assets/macros/protein.png';
import fatsImg from '../../../assets/macros/fats.png';
import { useTranslation } from 'react-i18next';

const TotalCalories = () => {
	const { caloriesPerDay, carbs, protein, fats } = useSelector(
		(state) => state.userInfo.parameters.macros
	);
	const { caloriesConsumed, proteinConsumed, fatsConsumed, carbsConsumed } =
		useSelector((state) => state.dailyMacros);

	const { t } = useTranslation();

	return (
		<div className='lg:w-1/2 max-h-96 p-8 px-4 lg:px-12 rounded-lg shadow-card lg:flex flex-col gap-4'>
			<div className='lg:flex justify-between items-center hidden'>
				<div className='relative flex flex-col items-center'>
					<span className='text-xl font-bold'>
						{t('nutrition.macros.eaten')}
					</span>
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
					<span className='text-xl font-bold'>
						{t('nutrition.macros.left')}
					</span>
					<span className='text-xl '>
						{Math.round((caloriesPerDay - caloriesConsumed) * 10) / 10} kcal
					</span>
				</div>
			</div>

			<div className='w-full flex justify-center items-center flex-col lg:hidden mb-3'>
				<div className='w-28 h-28 mb-3'>
					<ProgressCircle
						total={caloriesPerDay}
						current={caloriesConsumed}
						valueName='kcal'
					/>
				</div>
				<div className='flex justify-between gap-16 '>
					<div className='relative flex flex-col items-center'>
						<span className='lg:text-xl font-bold'>
							{t('nutrition.macros.left')}
						</span>
						<span className='lg:text-xl '>
							{Math.round((caloriesPerDay - caloriesConsumed) * 10) / 10} kcal
						</span>
					</div>
					<div className='relative flex flex-col items-center'>
						<span className='lg:text-xl font-bold'>
							{t('nutrition.macros.eaten')}
						</span>
						<span className='lg:text-xl'>{caloriesConsumed} kcal</span>
					</div>
				</div>
			</div>

			<hr className='h-0.5 bg-green-400' />
			<div className='flex justify-between mt-8'>
				<ProgressBar
					label={t('nutrition.macros.carbs')}
					current={carbsConsumed}
					total={carbs}
					img={carbsImg}
					color='bg-sky-400'
				/>
				<ProgressBar
					label={t('nutrition.macros.protein')}
					current={proteinConsumed}
					total={protein}
					img={proteinImg}
					color='bg-rose-500'
				/>
				<ProgressBar
					label={t('nutrition.macros.fats')}
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
