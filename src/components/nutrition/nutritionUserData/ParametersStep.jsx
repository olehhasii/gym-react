import React from 'react';

const ParametersStep = () => {
	return (
		<div className='flex flex-wrap justify-between'>
			<input
				type='text'
				className='h-14 w-80 p-4 mb-4 border border-gray-300 rounded-lg outline-none focus:border-black'
				placeholder='Age'
			/>
			<input
				type='text'
				className='h-14 w-80 p-4 mb-4 border border-gray-300 rounded-lg outline-none focus:border-black'
				placeholder='Height'
			/>
			<input
				type='text'
				className='h-14 w-80 p-4 mb-4 border border-gray-300 rounded-lg outline-none focus:border-black'
				placeholder='Weight'
			/>
			<input
				type='text'
				className='h-14 w-80 p-4 mb-4 border border-gray-300 rounded-lg outline-none focus:border-black'
				placeholder='Body fat % (Optional)'
			/>
		</div>
	);
};

export default ParametersStep;
