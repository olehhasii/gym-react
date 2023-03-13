import React from 'react';
import { useTranslation } from 'react-i18next';
import programImg from '../../assets/trainingBg.jpg';
const RecomendedPrograms = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h3 className='font-bold text-xl mb-3'>
				{t('overview.recomendedActivity.title')}
			</h3>
			<div className='p-4 shadow-card rounded-lg'>
				<div className='p-4 flex bg-blue-200 rounded-lg gap-4'>
					<img src={programImg} alt='training' className=' h-60' />
					<div>
						<h3 className='text-xl font-bold'>
							{t('overview.recomendedActivity.workoutName')}
						</h3>
						<p className='text-lg mt-3'>
							{t('overview.recomendedActivity.description')}
						</p>
						<button className='mt-4 bg-green-400 font-bold border-none outline-none h-10 w-40 rounded-lg'>
							{t('overview.recomendedActivity.btn')}
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RecomendedPrograms;
