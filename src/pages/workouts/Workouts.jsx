import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import NoWorkouts from '../../components/workouts/NoWorkouts';
import { setWorkouts } from '../../redux/actions/workoutsActions';
import WorkoutsList from '../../components/workouts/WorkoutsList';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Workouts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setWorkouts());
	}, [dispatch]);

	const { workouts, loading } = useSelector((state) => state.workouts);

	const { t } = useTranslation();

	if (loading) {
		return (
			<TailSpin
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass='flex justify-center mt-64'
				visible={true}
			/>
		);
	}
	if (workouts.length === 0) {
		return (
			<div className='p-12'>
				<NoWorkouts />
			</div>
		);
	}
	return (
		<div className='md:p-8 p-4'>
			<div className='mb-6 flex flex-col items-center md:flex-row justify-center '>
				<h1 className='font-bold text-2xl lg:text-3xl'>
					{t('trainings.title')}
				</h1>
				<div className='ml-auto mt-3 md:mt-0 flex items-center gap-6'>
					<Link
						to='/workouts/create-workout'
						className='p-2 text-center  bg-blue-300 font-bold text-sm lg:text-lg rounded-lg hover:scale-110 duration-200'>
						{t('trainings.createBtn')}
					</Link>
					<Link
						to='/test'
						className='p-2 text-center bg-blue-300 font-bold text-sm lg:text-lg rounded-lg hover:scale-110 duration-200'>
						{t('trainings.browseBtn')}
					</Link>
				</div>
			</div>
			<WorkoutsList />
		</div>
	);
};

export default Workouts;
