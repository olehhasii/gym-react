import React from 'react';
import { Outlet } from 'react-router-dom';

const Authentication = () => {
	return (
		<div className='w-full h-full flex justify-center items-center'>
			<Outlet />
		</div>
	);
};

export default Authentication;
