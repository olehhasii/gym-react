import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import MainWrapper from './MainWrapper';

const NavLayout = ({ isFullNavigation, onSetIsFullNavigation }) => {
	return (
		<>
			<Header isFull={isFullNavigation} onSetFull={onSetIsFullNavigation} />
			<Navigation isFull={isFullNavigation} hidden={'hidden lg:block'} />
			<MainWrapper>
				<Outlet />
			</MainWrapper>
		</>
	);
};

export default NavLayout;
