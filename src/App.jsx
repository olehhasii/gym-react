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
import ReportsNutrition from './pages/reports/ReportsNutrition';
import Workouts from './pages/workouts/Workouts';
import CreateWorkout from './components/workouts/createWorkout/CreateWorkout';
import WorkoutPage from './pages/workouts/WorkoutPage';
import TrainingSession from './pages/trainingSession/TrainingSession';
import TrainingSessionVerify from './features/TrainingSessionVerify';
import TrainingHistoryPage from './pages/trainingSession/TrainingHistoryPage';
import TrainingLogPage from './pages/trainingSession/TrainingLogPage';

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
					<Route
						path='/nutrition-charts'
						element={
							<ProtectedRouter>
								<ReportsNutrition />
							</ProtectedRouter>
						}
					/>
					<Route path='/workouts'>
						<Route
							index
							element={
								<ProtectedRouter>
									<Workouts />
								</ProtectedRouter>
							}
						/>
						<Route
							path='create-workout'
							element={
								<ProtectedRouter>
									<CreateWorkout />
								</ProtectedRouter>
							}
						/>
						<Route
							path=':workoutId'
							element={
								<ProtectedRouter>
									<WorkoutPage />
								</ProtectedRouter>
							}
						/>
					</Route>
					<Route
						path='/training-session/:workoutId'
						element={
							<ProtectedRouter>
								<TrainingSession />
							</ProtectedRouter>
						}
					/>
					<Route
						path='/history'
						element={
							<ProtectedRouter>
								<TrainingHistoryPage />
							</ProtectedRouter>
						}
					/>
					<Route
						path='/history/:logId'
						element={
							<ProtectedRouter>
								<TrainingLogPage />
							</ProtectedRouter>
						}
					/>
				</Route>
			</Routes>
			<AuthVerify />
			<TrainingSessionVerify />
		</>
	);
}

export default App;
