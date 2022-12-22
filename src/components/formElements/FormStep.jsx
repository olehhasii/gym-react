import React from 'react';

const FormStep = ({
	icon,
	text,
	currentStep,
	flexPosition = 'items-center',
}) => {
	const color = currentStep
		? 'bg-green-500 after:bg-green-500'
		: 'bg-gray-300 after:bg-gray-300';
	return (
		<div className={`flex flex-col ${flexPosition} w-1/3 relative`}>
			<div
				className={`${color} w-12 h-12 flex justify-center items-center rounded-lg after:absolute after:left-0 after:h-2 after:w-full after:-z-10`}>
				{icon}
			</div>
			<span className='font-bold mt-2'>{text}</span>
		</div>
	);
};

export default FormStep;
