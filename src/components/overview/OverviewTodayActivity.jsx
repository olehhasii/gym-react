import React from 'react';
import { useTranslation } from 'react-i18next';

const OverviewTodayActivity = () => {
	const { t } = useTranslation();

	return (
		<div>
			<h3 className='font-bold text-xl mb-3'>
				{t('overview.todaysActivity.title')}
			</h3>
			<div className='flex w-96 gap-4 '>
				<div className='p-3 flex justify-center items-center bg-blue-300 rounded-3xl'>
					<span className='font-bold text-center'>
						{t('overview.todaysActivity.workoutName')}
					</span>
				</div>
				<div className='shadow-card rounded-3xl'>
					<ul className='flex flex-col p-4 gap-4'>
						<li className='flex flex-col'>
							<span className='font-bold'>
								{t('overview.todaysActivity.exercises.first')}
							</span>
							<span>
								4 {t('overview.todaysActivity.sets')} 8{' '}
								{t('overview.todaysActivity.reps')}
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='font-bold'>
								{t('overview.todaysActivity.exercises.second')}
							</span>
							<span>
								3 {t('overview.todaysActivity.sets')} 12{' '}
								{t('overview.todaysActivity.reps')}
							</span>
						</li>
						<li className='flex flex-col'>
							<span className='font-bold'>
								{t('overview.todaysActivity.exercises.third')}
							</span>
							<span>
								4 {t('overview.todaysActivity.sets')} 10{' '}
								{t('overview.todaysActivity.reps')}
							</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default OverviewTodayActivity;
