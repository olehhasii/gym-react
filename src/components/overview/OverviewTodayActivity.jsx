import React from 'react';

const OverviewTodayActivity = () => {
	return (
		<div>
			<h3 className='font-bold text-xl mb-3'>Today's activity</h3>
			<div className='flex w-96 gap-4 '>
				<div className='p-3 flex justify-center items-center bg-blue-300 rounded-3xl'>
					<span className='font-bold text-center'>Chest workout</span>
				</div>
				<div className='shadow-card rounded-3xl'>
					<ul className='flex flex-col p-4 gap-4'>
						<li className='flex flex-col'>
							<span className='font-bold'>Bench press</span>
							<span>4 sets of 8 reps</span>
						</li>
						<li className='flex flex-col'>
							<span className='font-bold'>Incline dumbell press</span>
							<span>3 sets of 12 reps</span>
						</li>
						<li className='flex flex-col'>
							<span className='font-bold'>Buterrfly</span>
							<span>4 sets of 10 reps</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default OverviewTodayActivity;
