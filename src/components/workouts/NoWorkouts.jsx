import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const NoWorkouts = () => {
	const { t } = useTranslation();

	return (
		<div className='flex justify-center items-center flex-col'>
			<h2 className='font-bold text-3xl'>{t('trainings.noWorkoutTxt')}</h2>
			<div className='flex gap-10 mt-10'>
				<Link
					to='/workouts/create-workout'
					className='flex justify-center items-center h-12 w-40 bg-green-400 rounded-md font-bold cursor-pointer hover:scale-105 duration-300'>
					{t('trainings.createOne')}
				</Link>
				<Link
					to='/test'
					className='flex justify-center items-center h-12 w-40 bg-green-400 rounded-md font-bold cursor-pointer hover:scale-105 duration-300'>
					{t('trainings.chooseFromReady')}
				</Link>
			</div>
		</div>
	);
};

export default NoWorkouts;
