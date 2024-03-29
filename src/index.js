import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import store from './redux/store';

import './i18n';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<BrowserRouter>
			<CookiesProvider>
				<Provider store={store}>
					<App />
				</Provider>
			</CookiesProvider>
		</BrowserRouter>
	</React.StrictMode>
);

reportWebVitals();
