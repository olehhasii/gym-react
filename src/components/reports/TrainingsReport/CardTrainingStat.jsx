import React from 'react';

const CardTrainingStat = ({ bgColor, text, value, img }) => {
	return (
		<div
			className={`${bgColor} py-10 flex justify-center items-center flex-col rounded-xl w-1/5`}>
			<img src={img} alt='card' className='w-14 h-14 mb-6' />
			<span className='font-bold text-2xl'>{value}</span>
			<h3 className='font-bold text-lg'>{text}</h3>
		</div>
	);
};

export default CardTrainingStat;
