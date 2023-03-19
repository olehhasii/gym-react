import React from 'react';
import { useTranslation } from 'react-i18next';

const OverviewMacros = () => {
	const { t } = useTranslation();

	const percentageCarbs = Math.round((112 / 234) * 100);
	const percentageProtein = Math.round((68 / 176) * 100);
	const percentageFat = Math.round((55 / 76) * 100);

	return (
		<div className=' grow'>
			<h3 className='font-bold text-xl mb-3'>{t('overview.macros.title')}</h3>
			<div className=' flex flex-col gap-2'>
				<div className='flex flex-col items-center shadow-card px-3  rounded-3xl'>
					<div className='flex gap-2 items-center mb-2'>
						<h3 className='font-bold '>{t('overview.macros.carbs')}</h3>
					</div>
					<div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
						<div
							className='bg-sky-400 absolute top-0 left-0 h-full  rounded-2xl'
							style={{
								width: `${percentageCarbs > 100 ? 100 : percentageCarbs}%`,
							}}></div>
					</div>
					<span className='mt-2 text-sm'>
						{112} / {234}
					</span>
				</div>
				<div className='flex flex-col items-center shadow-card px-3 rounded-3xl'>
					<div className='flex gap-2 items-center mb-2'>
						<h3 className='font-bold '>{t('overview.macros.protein')}</h3>
					</div>
					<div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
						<div
							className='bg-red-400 absolute top-0 left-0 h-full  rounded-2xl'
							style={{
								width: `${percentageProtein > 100 ? 100 : percentageProtein}%`,
							}}></div>
					</div>
					<span className='mt-2 text-sm'>
						{68} / {176}
					</span>
				</div>
				<div className='flex flex-col items-center shadow-card px-3 rounded-3xl'>
					<div className='flex gap-2 items-center mb-2'>
						<h3 className='font-bold '>{t('overview.macros.fats')}</h3>
					</div>
					<div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
						<div
							className='bg-yellow-400 absolute top-0 left-0 h-full  rounded-2xl'
							style={{
								width: `${percentageFat > 100 ? 100 : percentageFat}%`,
							}}></div>
					</div>
					<span className='mt-2 text-sm'>
						{55} / {76}
					</span>
				</div>
			</div>
		</div>
	);
};

export default OverviewMacros;
