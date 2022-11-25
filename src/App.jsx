import { useState } from 'react';

import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Overview from './pages/overview/Overview';
import MainWrapper from './components/ui/MainWrapper';
import Authentication from './pages/authentication/Authentication';

function App() {
	const [isFullNavigation, setIsFullNavigation] = useState(true);

	const onSetIsFullNavigation = () => {
		setIsFullNavigation((state) => !state);
	};

	return (
		<>
			{/* <Header isFull={isFullNavigation} onSetFull={onSetIsFullNavigation} />
			<Navigation isFull={isFullNavigation} />
			<MainWrapper>
				<Overview />
			</MainWrapper> */}
			<Authentication />
		</>
	);
}

export default App;
