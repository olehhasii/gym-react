import React from 'react';
import { useTranslation } from 'react-i18next';

import img from '../../../assets/createWorkout.jpeg';
import CreateWorkoutForm from './CreateWorkoutForm';

const CreateWorkout = () => {
	const { t } = useTranslation();

	return (
		<div className='flex'>
			<div className='p-10 w-full overflow-auto max-h-[690px]'>
				<div>
					<h1 className='font-bold text-3xl mb-2'>
						{t('trainings.form.createTitle')}
					</h1>
					<p className='text-md'>{t('trainings.form.createDescription')}</p>
				</div>
				<CreateWorkoutForm />
			</div>
			<img src={img} alt='food' className='h-[calc(100vh_-_4rem)] ' />
		</div>
	);
};

export default CreateWorkout;
