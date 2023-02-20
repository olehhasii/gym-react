import React from 'react';

import CardTrainingStat from './CardTrainingStat';
import bumbellImg from '../../../assets/traing-report-cards/dumbbell.png';
import timeImg from '../../../assets/traing-report-cards/hourglass.png';
import muscleImg from '../../../assets/traing-report-cards/muscle.png';
import exerciseImg from '../../../assets/traing-report-cards/exercise.png';

const CardsTrainingsReport = () => {
	return (
		<div className='mt-8 flex gap-4 justify-between'>
			<CardTrainingStat
				bgColor='bg-green-200'
				text='Times you trained'
				value={3}
				img={bumbellImg}
			/>
			<CardTrainingStat
				bgColor='bg-red-300'
				text='Minutes'
				value={570}
				img={timeImg}
			/>
			<CardTrainingStat
				bgColor='bg-amber-200'
				text='Favourite muscle group'
				value='Chest'
				img={muscleImg}
			/>
			<CardTrainingStat
				bgColor='bg-teal-200'
				text='Exercises done'
				value={45}
				img={exerciseImg}
			/>
		</div>
	);
};

export default CardsTrainingsReport;
