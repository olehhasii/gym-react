import React from 'react';

import programImg from '../../assets/trainingBg.jpg';

const OverviewProgramCard = () => {
	return (
		<div>
			<h3 className='font-bold text-xl'>Recomeded workout</h3>
			<div className='p-4 flex bg-blue-200 rounded-lg gap-4'>
				<img src={programImg} alt='training' className=' h-60' />
				<div>
					<h3 className='text-xl font-bold'>Full body workout</h3>
					<p className='text-lg mt-3'>
						Full body workout is perfect for any experience level. Beginners
						will thrive when using full body workouts. Intermediates will
						continue to notice progress towards their goals. And advanced
						lifters will be able to maintain their size and slowly build upon
						their established foundation.
					</p>
					<button className='mt-4 bg-green-400 font-bold border-none outline-none h-10 w-40 rounded-lg'>
						Try it out
					</button>
				</div>
			</div>
		</div>
	);
};

export default OverviewProgramCard;
