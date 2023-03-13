import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import OverviewMacros from '../../components/overview/OverviewMacros';
import OverviewProgramCard from '../../components/overview/OverviewProgramCard';
import OverviewTodayActivity from '../../components/overview/OverviewTodayActivity';
import RecomendedPrograms from '../../components/overview/RecomendedPrograms';
import ProgressBar from '../../components/ui/ProgressBar';
import ProgressCircle from '../../components/ui/ProgressCircle';

const Overview = () => {
	const { username } = useSelector((state) => state.userInfo);
	const { t, i18n } = useTranslation();

	return (
		<div className='p-8'>
			<div className='flex gap-10 flex-wrap'>
				<OverviewTodayActivity />
				<div>
					{/* <h3 className='font-bold text-xl mb-3'>Todays calories</h3> */}
					<h3 className='font-bold text-xl mb-3'>{t('description.part2')}</h3>
					<div className='shadow-card flex justify-center items-center p-8 rounded-3xl'>
						<div className='w-40 h-40 '>
							<ProgressCircle total={2040} current={780} valueName='kcal' />
						</div>
					</div>
				</div>
				<OverviewMacros />
				<RecomendedPrograms />
			</div>
		</div>
	);
};

export default Overview;
