import React from 'react';

const ProgressBar = ({ label, current, total, color }) => {
	const percentage = Math.round((current / total) * 100);
	console.log(percentage);
	return (
		<div className='w-[25%] flex flex-col items-center'>
			<h3 className='font-bold mb-2'>{label}</h3>
			<div className='bg-gray-200 relative h-[10px] w-full rounded-2xl'>
				<div
					className={`${color} absolute top-0 left-0 h-full  rounded-2xl`}
					style={{ width: `${percentage}%` }}></div>
			</div>
			<span className='mt-2 text-sm'>
				{current} / {total}
			</span>
		</div>
	);
};

export default ProgressBar;
