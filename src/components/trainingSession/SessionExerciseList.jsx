import React from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import api from '../../features/api';
import { setTrainingFisnish } from '../../redux/actions/trainingSessionActions';
import SessionExerciseItem from './SessionExerciseItem';

const SessionExerciseList = ({ exercises }) => {
	const { trainingSession } = useSelector((state) => state);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	if (!exercises) {
		return;
	}

	const checkIfAllExercisesIsDone = () => {
		return exercises.every((exercise) => exercise.done);
	};

	const onFinishWorkout = () => {
		const timeOfStart = new Date(trainingSession.timeWorkoutWasStarted);
		const timeWorkoutFinished = new Date();
		const { _id, activeExercise, ...trainingSessionRest } = trainingSession;

		const timePassed = Math.round(
			(timeWorkoutFinished.getTime() - timeOfStart.getTime()) / 1000
		);

		const trainingLog = {
			...trainingSessionRest,
			timeWorkoutFinished,
			timePassed,
			workoutId: _id,
		};
		api
			.post('/training-session/save-training-log', trainingLog)
			.then(() => {
				dispatch(setTrainingFisnish());
				navigate('/');
			})
			.catch((err) => console.log(err));
	};

	return (
		<div>
			{checkIfAllExercisesIsDone() ? (
				<p className='font-bold text-3xl mt-5 mb-6'>
					{t('trainings.trainingSession.finishedAll')}
				</p>
			) : (
				<p className='font-bold text-3xl mt-5 mb-6'>
					{t('trainings.trainingSession.selectExercise')}
				</p>
			)}
			<button
				className='bordred-none outline-none p-3 text-lg bg-green-400 font-bold rounded-lg hover:scale-110 duration-200'
				onClick={onFinishWorkout}>
				{t('trainings.trainingSession.finisheBtn')}
			</button>
			<ul className='list-none mt-6 flex flex-col gap-4'>
				{exercises.map((exercise) => {
					return exercise.done ? null : (
						<SessionExerciseItem exercise={exercise} />
					);
				})}
			</ul>
			<ul className='list-none mt-6 flex flex-col gap-4'>
				{exercises.map((exercise) => {
					return exercise.done ? (
						<SessionExerciseItem exercise={exercise} done={true} />
					) : null;
				})}
			</ul>
		</div>
	);
};

export default SessionExerciseList;
