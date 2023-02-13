import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const Timer = () => {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [isPaused, setIsPaused] = useState(true);
	const increment = useRef(null);

	const { timeWorkoutWasStarted } = useSelector(
		(state) => state.trainingSession
	);
	/* const handleStart = () => {
		setIsActive(true);
		setIsPaused(true);
		increment.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
	}; */

	const handlePause = () => {
		clearInterval(increment.current);
		setIsPaused(false);
	};

	const handleResume = () => {
		setIsPaused(true);
		increment.current = setInterval(() => {
			setTimer((timer) => timer + 1);
		}, 1000);
	};

	const handleReset = () => {
		clearInterval(increment.current);
		setIsActive(false);
		setIsPaused(false);
		setTimer(0);
	};

	const formatTime = () => {
		const getSeconds = `0${timer % 60}`.slice(-2);
		const minutes = `${Math.floor(timer / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);
		const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

		return `${getHours} : ${getMinutes} : ${getSeconds}`;
	};

	useEffect(() => {
		const timeNow = new Date();
		const timeOfStart = new Date(timeWorkoutWasStarted);
		const diff = (timeNow.getTime() - timeOfStart.getTime()) / 1000;

		setTimer(Math.round(diff));
	}, [timeWorkoutWasStarted]);

	useEffect(() => {
		if (isActive) {
			increment.current = setInterval(() => {
				setTimer((timer) => timer + 1);
			}, 1000);
		} else if (!isActive) {
			clearInterval(increment.current);
		}

		return () => clearInterval(increment.current);
	}, [isActive]);

	return (
		<div className='flex justify-between items-center'>
			<span className='font-bold text-3xl'>{formatTime(timer)}</span>
			{isPaused ? (
				<button
					onClick={handlePause}
					className='font-bold text-lg p-2 text-center bg-green-400 border-none outline-none rounded-lg hover:scale-110 duration-200'>
					Pause workout
				</button>
			) : (
				<button
					onClick={handleResume}
					className='font-bold w-32 text-lg p-2 text-center bg-green-400 border-none outline-none rounded-lg hover:scale-110 duration-200'>
					Resume
				</button>
			)}
		</div>
	);
};

export default Timer;
