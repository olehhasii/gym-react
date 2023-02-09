import React from 'react';
import { useState } from 'react';
import { createPortal } from 'react-dom';
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../../features/api';
import ModalOverlay from '../ui/ModalOverlay';

const WorkoutDetails = ({
	workoutName,
	daysOfWorkout,
	muscleGroups,
	workoutId,
}) => {
	const [, setSearchParams] = useSearchParams();

	const [openDeleteModal, setOpenDeleteModal] = useState(false);
	const [openTrainModal, setOpenTrainModal] = useState(false);

	const navigate = useNavigate();

	const rootDiv = document.getElementById('root');

	const onDeleteWorkout = () => {
		api
			.delete(`/training/remove/${workoutId}`)
			.then(() => navigate('/workouts'));
	};

	const onStartTraining = () => {
		navigate(`/training-session/${workoutId}`);
	};

	return (
		<div className='flex flex-col flex-wrap gap-4 '>
			<div className='flex justify-between'>
				<h1 className='font-bold text-3xl'>{workoutName}</h1>
				<div className='flex gap-3'>
					<button
						className='block font-bold w-32 text-lg p-2 text-center bg-green-400 rounded-lg hover:scale-110 duration-200'
						onClick={() => setOpenTrainModal(true)}>
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
