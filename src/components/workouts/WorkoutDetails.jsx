import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
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
						Train
					</button>
					<button
						onClick={() => setSearchParams({ edit: true })}
						className='block font-bold w-32 text-lg p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'>
						Edit
					</button>
					<button
						className='font-bold w-32 text-lg p-2 text-center bg-red-500 rounded-lg hover:scale-110 duration-200'
						onClick={() => setOpenDeleteModal(true)}>
						Delete
					</button>
				</div>
			</div>
			<div>
				<span className='text-xl flex items-center gap-3 flex-wrap'>
					Muscle groups:{' '}
					{muscleGroups.map((group) => (
						<span className='border border-gray-300 rounded-md p-2'>
							{group}
						</span>
					))}
				</span>
				<span className='text-xl flex items-center gap-3 flex-wrap mt-2'>
					Days:{' '}
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
						text='Are you sure you want to delete this workout?'
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
						text='Start training?'
					/>,
					rootDiv
				)}
		</div>
	);
};

export default WorkoutDetails;
