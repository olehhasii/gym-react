import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';

const NavLayout = ({ isFullNavigation, onSetIsFullNavigation }) => {
	return (
		<>
			<Header isFull={isFullNavigation} onSetFull={onSetIsFullNavigation} />
			<Navigation isFull={isFullNavigation} />
			<Outlet />
		</>
	);
};

export default NavLayout;
