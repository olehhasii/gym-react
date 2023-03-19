import React from 'react';
import {
	CircularProgressbarWithChildren,
	buildStyles,
} from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProgressCircle = ({ total, current, valueName }) => {
	const percentage = (current / total) * 100;

	return (
		<CircularProgressbarWithChildren
			value={percentage}
			strokeWidth={5}
			styles={buildStyles({
				pathColor: '#4ade80',
				trailColor: '#bbf7d0',
				textColor: 'black',
			})}>
			<span className='font-bold lg:text-xl'>
				{current}/{total}
			</span>
			<span className='text-sm lg:text-lg'>{valueName}</span>
		</CircularProgressbarWithChildren>
	);
};

export default ProgressCircle;
