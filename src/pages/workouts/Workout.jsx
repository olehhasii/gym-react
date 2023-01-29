import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import NoWorkouts from '../../components/workouts/NoWorkouts';
import { setWorkouts } from '../../redux/actions/workoutsActions';

const Workout = () => {
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
};

export default Workout;
