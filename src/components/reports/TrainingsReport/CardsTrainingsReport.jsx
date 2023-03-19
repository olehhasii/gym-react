import React from 'react';

import CardTrainingStat from './CardTrainingStat';
import bumbellImg from '../../../assets/traing-report-cards/dumbbell.png';
import timeImg from '../../../assets/traing-report-cards/hourglass.png';
import muscleImg from '../../../assets/traing-report-cards/muscle.png';
import exerciseImg from '../../../assets/traing-report-cards/exercise.png';
import { useTranslation } from 'react-i18next';

const CardsTrainingsReport = () => {
	const { t } = useTranslation();

	return (
		<div className='mt-8 flex flex-col md:flex-row gap-4 items-center'>
			<CardTrainingStat
				bgColor='bg-green-200'
				text={t('trainings.report.timesTrained')}
				value={3}
				img={bumbellImg}
			/>
			<CardTrainingStat
				bgColor='bg-red-300'
				text={t('trainings.report.minutes')}
				value={570}
				img={timeImg}
			/>
			<CardTrainingStat
				bgColor='bg-amber-200'
				text={t('trainings.report.favourite')}
				value='Chest'
				img={muscleImg}
			/>
			<CardTrainingStat
				bgColor='bg-teal-200'
				text={t('trainings.report.exerciseDone')}
				value={45}
				img={exerciseImg}
			/>
		</div>
	);
};

export default CardsTrainingsReport;
