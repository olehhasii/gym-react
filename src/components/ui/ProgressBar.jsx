import React from 'react';

const ProgressBar = ({ label, current, total, color, img }) => {
	const percentage = Math.round((current / total) * 100);
	return (
		<div className='w-[25%] flex flex-col items-center '>
			<div className='flex gap-2 items-center mb-2'>
				{img && <img src={img} alt='macros' className='w-10 h-10' />}
				<h3 className='font-bold '>{label}</h3>
			</div>
			<div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
				<div
					className={`${color} absolute top-0 left-0 h-full  rounded-2xl`}
					style={{ width: `${percentage > 100 ? 100 : percentage}%` }}></div>
			</div>
			<span className='mt-2 text-sm'>
				{current} / {total}
			</span>
		</div>
	);
};

export default ProgressBar;
