import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Overview from './pages/overview/Overview';
import Authentication from './pages/authentication/Authentication';
import LoginForm from './components/formElements/auth/LoginForm';
import SignupForm from './components/formElements/auth/SignupForm';
import NavLayout from './components/ui/NavLayout';
import AuthVerify from './features/AuthVerify';
import ProtectedRouter from './features/ProtectedRouter';
import Nutrition from './pages/nutrition/Nutrition';

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
							<ProtectedRouter>
								<Overview />
							</ProtectedRouter>
						}
					/>
					<Route
						path='/nutrition'
						element={
							<ProtectedRouter>
								<Nutrition />
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
