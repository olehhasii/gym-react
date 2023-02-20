import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TailSpin } from 'react-loader-spinner';

import api from '../../features/api';
import LogDetails from '../../components/trainingHistory/LogDetails';
import ExercisesTable from '../../components/trainingHistory/ExercisesTable';

const TrainingLogPage = () => {
	const [trainingLog, setTrainingLog] = useState(null);
	const [loading, setLoading] = useState(false);

	const { logId } = useParams();

	useEffect(() => {
		setLoading(true);
		api.get(`/training-session/log/${logId}`).then((res) => {
			setTrainingLog(res.data);
			setLoading(false);
		});
	}, [logId]);

	if (loading || !trainingLog)
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

	return (
		<div className='p-8'>
			<h2 className='font-bold text-2xl'>Training Log Details</h2>
			<LogDetails trainingLog={trainingLog} />
			{trainingLog.exercises.map((exercise) => (
				<ExercisesTable key={exercise.exerciseName} exercise={exercise} />
			))}
		</div>
	);
};

export default TrainingLogPage;
