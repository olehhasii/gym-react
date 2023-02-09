import React, { useState } from 'react';
import { useEffect } from 'react';
import Timer from '../../components/trainingSession/Timer';

const TrainingSession = () => {
	const [time, setTime] = useState(0);
	const [timeOn, setTimeOn] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timeOn) {
			interval = setInterval(() => {
				setTime((prevTime) => prevTime + 10);
			}, 10);
		} else if (!timeOn) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timeOn]);

	return (
		<div className='p-8'>
			<Timer />
		</div>
	);
};

export default TrainingSession;
