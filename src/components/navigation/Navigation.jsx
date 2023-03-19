import React from 'react';
import {
	FaHome,
	FaNutritionix,
	FaRegChartBar,
	FaDumbbell,
	FaHistory,
} from 'react-icons/fa';
import { CgGym, CgChart } from 'react-icons/cg';
import { useSelector } from 'react-redux';

import logo from '../../assets/guts.png';
import NavigationLink from './NavigationLink';
import { useTranslation } from 'react-i18next';

const Navigation = ({ isFull, hidden, responsive, refResponsive }) => {
	const { _id } = useSelector((state) => state.trainingSession);

	const { t } = useTranslation();

	return (
		<div
			className={`${
				isFull ? 'navig' : 'w-20'
			} ${hidden} ${responsive} h-full border-r border-0 border-solid border-gray-300 duration-500 transition-all`}
			ref={refResponsive}>
			{' '}
			{/* fixed top-0 left-0 */}
			<div className='flex p-6'>
				<img src={logo} alt='logo' className='h-12 mr-8' />
				<h2
					className={
						isFull
							? 'text-lg font-bold flex items-center duration-1000 transition-all'
							: 'hidden duration-1000 transition-all'
					}>
					Gym app
				</h2>
			</div>
			<hr
				className={
					isFull
						? 'my-4 duration-500 transition-all'
						: 'my-1 duration-500 transition-all'
				}
			/>
			<div>
				<ul className='text-sm font-bold'>
					<NavigationLink
						linkText={t('navigation.overview')}
						linkUrl='/'
						isFull={isFull}
						icon={<FaHome className='text-xl' />}
					/>
					<NavigationLink
						linkText={t('navigation.workouts')}
						linkUrl='/workouts'
						isFull={isFull}
						icon={<FaDumbbell className='text-xl' />}
					/>
					<NavigationLink
						linkText={t('navigation.trainingHistory')}
						linkUrl='/history'
						isFull={isFull}
						icon={<FaHistory className='text-xl' />}
					/>
					<NavigationLink
						linkText={t('navigation.trainingReports')}
						linkUrl='/trainings-chart'
						isFull={isFull}
						icon={<CgChart className='text-xl' />}
					/>
					{_id && (
						<NavigationLink
							linkText={t('navigation.activeTraining')}
							linkUrl={`/training-session/${_id}`}
							isFull={isFull}
							icon={<CgGym className='text-xl' />}
						/>
					)}
					<NavigationLink
						linkText={t('navigation.nutrition')}
						linkUrl='/nutrition'
						isFull={isFull}
						icon={<FaNutritionix className='text-xl' />}
					/>
					<NavigationLink
						linkText={t('navigation.nutritionReport')}
						linkUrl='/nutrition-charts'
						isFull={isFull}
						icon={<FaRegChartBar className='text-xl' />}
					/>
				</ul>
			</div>
		</div>
	);
};

export default Navigation;
