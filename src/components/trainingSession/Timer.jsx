import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

const Timer = () => {
	const [timer, setTimer] = useState(0);
	const [isActive, setIsActive] = useState(true);
	const [isPaused, setIsPaused] = useState(true);
	const increment = useRef(null);

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

	/* const handleReset = () => {
		clearInterval(increment.current);
		setIsActive(false);
		setIsPaused(false);
		setTimer(0);
	}; */

	const formatTime = () => {
		const getSeconds = `0${timer % 60}`.slice(-2);
		const minutes = `${Math.floor(timer / 60)}`;
		const getMinutes = `0${minutes % 60}`.slice(-2);
		const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

		return `${getHours} : ${getMinutes} : ${getSeconds}`;
	};

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
		<div className='flex justify-center items-center'>
			<div className='text-4xl font-bold'>
				<span>{formatTime(timer)}</span>
				<div className='flex justify-center items-center gap-4'>
					{isPaused ? (
						<button onClick={handlePause}>Pause</button>
					) : (
						<button onClick={handleResume}>Resume</button>
					)}
				</div>
			</div>
		</div>
	);
};

export default Timer;
