import React from 'react';

const HistoryTableHeader = () => {
	return (
		<thead className='bg-green-100'>
			<tr>
				<th className='text-left p-4'>
					<span>Workout name</span>
				</th>
				<th className='text-left p-4'>
					<span>Muscle groups</span>
				</th>
				<th className='text-left p-4'>
					<span>Date</span>
				</th>
				<th className='text-left p-4'>
					<span>Time</span>
				</th>
				<th></th>
			</tr>
		</thead>
	);
};

export default HistoryTableHeader;
