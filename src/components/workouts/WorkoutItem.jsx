import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { setTrainingSession } from '../../redux/actions/trainingSessionActions';

import ModalOverlay from '../ui/ModalOverlay';

const WorkoutItem = ({ key, workout }) => {
	const [openTrainModal, setOpenTrainModal] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const rootDiv = document.getElementById('root');

	const { _id } = useSelector((state) => state.trainingSession);

	const { t } = useTranslation();

	const onStartTraining = () => {
		const timeWorkoutWasStarted = new Date();
		dispatch(
			setTrainingSession({
				...workout,
				timeWorkoutWasStarted,
				activeExercise: null,
			})
		);
		navigate(`/training-session/${workout._id}`);
	};

	return (
		<li
			key={key}
			className='p-6 min-h-[13rem] flex flex-col justify-between border border-gray-300 rounded-lg md:w-96'>
			<span className='font-bold text-2xl'>{workout.workoutName}</span>
			<div className='flex flex-col'>
				<span>
					{t('trainings.workoutItem.muscleGroups')}:{' '}
					{workout.muscleGroups.map((group, index) =>
						index === workout.muscleGroups.length - 1 ? group : group + '/'
					)}{' '}
				</span>
				<span>
					{t('trainings.workoutItem.days')}:{' '}
					{workout.daysOfWorkout.map((day, index) =>
						index === workout.daysOfWorkout.length - 1 ? day : day + '/'
					)}
				</span>
			</div>
			<div className='flex gap-4'>
				<Link
					to={`${workout._id}`}
					className='text-sm font-bold p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200 md:w-28'>
					{t('trainings.workoutItem.viewBtn')}
				</Link>
				<button
					className={`${
						_id
							? 'bg-gray-300 cursor-not-allowed'
							: 'bg-green-400 hover:scale-110 duration-200'
					} font-bold text-sm  p-2 text-center rounded-lg md:w-28`}
					onClick={() => setOpenTrainModal(true)}
					disabled={_id}>
					{t('trainings.workoutItem.trainBtn')}
				</button>
				<Link
					to={`${workout._id}?edit=true`}
					className='text-sm font-bold p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200 md:w-28'>
					{t('trainings.workoutItem.editBtn')}
				</Link>
			</div>

			{openTrainModal &&
				createPortal(
					<ModalOverlay
						onClose={() => {
							setOpenTrainModal(false);
						}}
						onConfirmHandler={onStartTraining}
						text={t('trainings.workoutItem.modal.textStartTraining')}
					/>,
					rootDiv
				)}
		</li>
	);
};

export default WorkoutItem;
