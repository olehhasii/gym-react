import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TailSpin } from 'react-loader-spinner';

import NutritionChartWrapper from '../../components/reports/LineChartWrapper';
import RoundChartWrapper from '../../components/reports/RoundChartWrapper';
import ValueCarsdList from '../../components/reports/ValueCarsdList';
import { setReportNutrition } from '../../redux/actions/reportNutritionsActions';

const ReportsNutrition = () => {
	const dispatch = useDispatch();
	const { loading } = useSelector((state) => state.reportNutrition);
	const { endDate, startDate } = useSelector((state) => state.reportNutrition);

	useEffect(() => {
		dispatch(
			setReportNutrition({
				timeLine: 'week',
				startDate: startDate,
				endDate: endDate,
			})
		);
	}, [dispatch, endDate, startDate]);

	if (loading) {
		return (
			<TailSpin
				height='80'
				width='80'
				color='#4fa94d'
				ariaLabel='tail-spin-loading'
				radius='1'
				wrapperStyle={{}}
				wrapperClass='flex justify-center mt-64'
				visible={true}
			/>
		);
	}

	return (
		<div className='px-6 py-8 flex justify-between flex-col lg:flex-row'>
			<ValueCarsdList />
			<div className='flex flex-col lg:w-3/4 justify-between'>
				<NutritionChartWrapper />
				<RoundChartWrapper />
			</div>
		</div>
	);
};

export default ReportsNutrition;
