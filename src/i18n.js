import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

const availableLanguages = ['en', 'ua'];

i18n
	.use(Backend)
	.use(initReactI18next)
	.init({
		fallbackLng: 'ua',
		debug: true,
		whitelist: availableLanguages,
		interpolation: {
			escapeValue: false, // not needed for react as it escapes by default
		},
	});

export default i18n;

/* import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-xhr-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

const fallbackLng = ['en'];
const availableLanguages = ['en', 'bn'];

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng,
		detection: {
			checkWhitelist: true,
		},
		debug: false,
		whitelist: availableLanguages,
		interpolation: {
			escapeValue: false, // no need for react. it escapes by default
		},
	});

export default i18n; */
