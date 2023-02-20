import React from 'react';
import CardsTrainingsReport from '../../components/reports/TrainingsReport/CardsTrainingsReport';
import SelectPeriod from '../../components/reports/TrainingsReport/SelectPeriod';

const ReportsTrainings = () => {
	return (
		<div className='p-8'>
			<SelectPeriod />
			<CardsTrainingsReport />
		</div>
	);
};

export default ReportsTrainings;
