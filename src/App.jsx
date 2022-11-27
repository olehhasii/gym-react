import { useState } from 'react';

import Overview from './pages/overview/Overview';
import MainWrapper from './components/ui/MainWrapper';
import Authentication from './pages/authentication/Authentication';
import { Route, Routes } from 'react-router-dom';
import LoginForm from './components/formElements/LoginForm';
import SignupForm from './components/formElements/SignupForm';
import NavLayout from './components/ui/NavLayout';

function App() {
	const [isFullNavigation, setIsFullNavigation] = useState(true);

	const onSetIsFullNavigation = () => {
		setIsFullNavigation((state) => !state);
	};

	return (
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
			</Route>
		</Routes>
	);
}

export default App;
