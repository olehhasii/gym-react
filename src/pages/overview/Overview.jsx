import React from 'react';
import { useTranslation } from 'react-i18next';

import OverviewMacros from '../../components/overview/OverviewMacros';
import OverviewTodayActivity from '../../components/overview/OverviewTodayActivity';
import RecomendedPrograms from '../../components/overview/RecomendedPrograms';

import ProgressCircle from '../../components/ui/ProgressCircle';

const Overview = () => {
	const { t } = useTranslation();

	return (
		<div className='p-8'>
			<div className='flex flex-col gap-10 flex-wrap md:flex-row  '>
				<OverviewTodayActivity />
				<div>
					{/* <h3 className='font-bold text-xl mb-3'>Todays calories</h3> */}
					<h3 className='font-bold text-xl mb-3'>
						{t('overview.todaysCalories.title')}
					</h3>
					<div className='shadow-card flex justify-center items-center p-8 rounded-3xl'>
						<div className='w-40 h-40 '>
							<ProgressCircle total={2040} current={780} valueName='kcal' />
						</div>
					</div>
				</div>
				<OverviewMacros />
			</div>
			<RecomendedPrograms />
		</div>
	);
};

export default Overview;
