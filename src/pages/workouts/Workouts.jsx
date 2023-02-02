import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import NoWorkouts from '../../components/workouts/NoWorkouts';
import { setWorkouts } from '../../redux/actions/workoutsActions';
import WorkoutsList from '../../components/workouts/WorkoutsList';
import { Link } from 'react-router-dom';

const Workouts = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setWorkouts());
	}, [dispatch]);

	const { workouts, loading } = useSelector((state) => state.workouts);

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
		<div className='p-8'>
			<div className='mb-6 flex items-center'>
				<h1 className='font-bold text-3xl'>Your saved workouts</h1>
				<div className='ml-auto flex items-center gap-6'>
					<Link
						to='/workouts/create-workout'
						className='p-3 bg-blue-300 font-bold text-lg rounded-lg hover:scale-110 duration-200'>
						Create workout
					</Link>
					<Link
						to='/test'
						className='p-3 bg-blue-300 font-bold text-lg rounded-lg hover:scale-110 duration-200'>
						Browse ready workouts
					</Link>
				</div>
			</div>
			<WorkoutsList />
		</div>
	);
};

export default Workouts;
