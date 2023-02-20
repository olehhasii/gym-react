import React, { useEffect } from 'react';
import { useState } from 'react';
import { TailSpin } from 'react-loader-spinner';

import TrainingHistoryTable from '../../components/trainingHistory/TrainingHistoryTable';
import api from '../../features/api';

const TrainingHistoryPage = () => {
	const [trainingLogs, setTrainingLogs] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		api
			.get('/training-session/logs')
			.then((res) => {
				setTrainingLogs(res.data);
				setLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (loading)
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

	if (trainingLogs.length === 0)
		return (
			<div className='flex justify-center items-center h-full'>
				<p className='font-bold text-3xl mb-20'>
					You have no trainings logs yet
				</p>
			</div>
		);

	return (
		<div className='p-8'>
			<h2 className='font-bold text-3xl'>Your training history</h2>
			<TrainingHistoryTable logs={trainingLogs} />
		</div>
	);
};

export default TrainingHistoryPage;
