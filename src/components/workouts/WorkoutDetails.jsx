import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../features/api';
import { setTrainingSession } from '../../redux/actions/trainingSessionActions';
import ModalOverlay from '../ui/ModalOverlay';

const WorkoutDetails = ({
	workoutName,
	daysOfWorkout,
	muscleGroups,
	workoutId,
	workout,
}) => {
	const [, setSearchParams] = useSearchParams();
	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openTrainModal, setOpenTrainModal] = useState(false);

	const { _id } = useSelector((state) => state.trainingSession);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const rootDiv = document.getElementById('root');

	const { t } = useTranslation();

	const onDeleteWorkout = () => {
		api
			.delete(`/training/remove/${workoutId}`)
			.then(() => navigate('/workouts'));
	};

	const onStartTraining = () => {
		const timeWorkoutWasStarted = new Date();
		dispatch(
			setTrainingSession({
				...workout,
				timeWorkoutWasStarted,
				activeExercise: null,
			})
		);
		navigate(`/training-session/${workoutId}`);
	};

	return (
		<div className='flex flex-col flex-wrap gap-4 '>
			<div className='flex justify-between'>
				<h1 className='font-bold text-3xl'>{workoutName}</h1>
				<div className='flex gap-3'>
					<button
						className={`${
							_id
								? 'bg-gray-300 cursor-not-allowed '
								: 'bg-green-400 hover:scale-110 duration-200'
						} block font-bold w-32 text-lg p-2 text-center rounded-lg `}
						onClick={() => setOpenTrainModal(true)}
						disabled={_id}>
						{t('trainings.workoutItem.trainBtn')}
					</button>
					<button
						onClick={() => setSearchParams({ edit: true })}
						className='block font-bold w-32 text-lg p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
						{t('trainings.workoutItem.editBtn')}
					</button>
					<button
						className='font-bold w-32 text-lg p-2 text-center bg-red-500 rounded-lg hover:scale-110 duration-200'
						onClick={() => setOpenDeleteModal(true)}>
						{t('trainings.workoutItem.deleteBtn')}
					</button>
				</div>
			</div>
			<div>
				<span className='text-xl flex items-center gap-3 flex-wrap'>
					{t('trainings.workoutItem.muscleGroups')}:{' '}
					{muscleGroups.map((group) => (
						<span className='border border-gray-300 rounded-md p-2'>
							{group}
						</span>
					))}
				</span>
				<span className='text-xl flex items-center gap-3 flex-wrap mt-2'>
					{t('trainings.workoutItem.days')}:{' '}
					{daysOfWorkout.map((day) => (
						<span className='border border-gray-300 rounded-md p-2'>{day}</span>
					))}
				</span>
			</div>
			{openDeleteModal &&
				createPortal(
					<ModalOverlay
						onClose={() => {
							setOpenDeleteModal(false);
						}}
						onConfirmHandler={onDeleteWorkout}
						text={t('trainings.workoutItem.modal.textDelete')}
					/>,
					rootDiv
				)}
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
		</div>
	);
};

export default WorkoutDetails;
