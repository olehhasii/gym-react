import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Overview from './pages/overview/Overview';
import MainWrapper from './components/ui/MainWrapper';
import Authentication from './pages/authentication/Authentication';
import LoginForm from './components/formElements/LoginForm';
import SignupForm from './components/formElements/SignupForm';
import NavLayout from './components/ui/NavLayout';
import AuthVerify from './features/AuthVerify';
import ProtectedRouter from './features/ProtectedRouter';

function App() {
	const [isFullNavigation, setIsFullNavigation] = useState(true);
	const onSetIsFullNavigation = () => {
		setIsFullNavigation((state) => !state);
	};

	return (
		<>
			<Routes>
				<Route path='/auth' element={<Authentication />}>
					<Route path='login' element={<LoginForm />} />
					<Route path='signup' element={<SignupForm />} />
				</Route>
				<Route
					path='/'
					element={
						<NavLayout
							isFullNavigation={isFullNavigation}
							onSetIsFullNavigation={onSetIsFullNavigation}
						/>
					}>
					<Route
						index
						element={
							<MainWrapper>
								<Overview />
							</MainWrapper>
						}
					/>
					<Route
						path='test'
						element={
							<ProtectedRouter>
								<p>hi</p>
							</ProtectedRouter>
						}
					/>
				</Route>
			</Routes>
			<AuthVerify />
		</>
	);
}

export default App;
