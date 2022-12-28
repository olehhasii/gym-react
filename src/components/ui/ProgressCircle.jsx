import React from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ total, current }) => {
	const percentage = 66;

	return (
		<CircularProgressbarWithChildren
			value={percentage}
			strokeWidth={5}
			styles={buildStyles({
				pathColor: '#4ade80',
				trailColor: '#bbf7d0',
				textColor: 'black',
			})}>
			<span className='font-bold text-xl'>
				{2000}/{total}
			</span>
			<span className='text-lg'>kcal</span>
		</CircularProgressbarWithChildren>
	);
};

export default ProgressCircle;
