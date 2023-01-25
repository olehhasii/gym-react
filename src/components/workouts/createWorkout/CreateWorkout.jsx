import React from 'react';

import img from '../../../assets/createWorkout.jpeg';
import CreateWorkoutForm from './CreateWorkoutForm';

const CreateWorkout = () => {
	return (
		<div className='flex'>
			<div className='p-10 w-full'>
				<div>
					<h1 className='font-bold text-3xl mb-2'>
						Create your own workout plan!
					</h1>
					<p className='text-md'>
						Add exercices, reps, sets and muscle group to start tracking your
						sport activities. This will help you to stick to the plan and reach
						your goals.
					</p>
				</div>
				<CreateWorkoutForm />
			</div>
			<img src={img} alt='food' className='h-[calc(100vh_-_4rem)]' />
		</div>
	);
};

export default CreateWorkout;
