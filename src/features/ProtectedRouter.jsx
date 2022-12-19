import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useCookies } from 'react-cookie';

const ProtectedRouter = ({ accessByAuth, children }) => {
	const [cookies] = useCookies();
	if (!cookies.access_token) {
		return <Navigate to='/auth/login' replace />;
	}

	return children ? children : <Outlet />;
};

export default ProtectedRouter;
