import React from 'react';
import { useTranslation } from 'react-i18next';

const SelectLanguage = () => {
	const { i18n } = useTranslation();

	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	return (
		<select
			onChange={(e) => changeLanguage(e.target.value)}
			id='dateRange'
			className='w-16 p-2 border border-gray-300 rounded-lg outline-none'>
			<option value='en'>EN</option>
			<option value='ua' selected>
				UA
			</option>
		</select>
	);
};

export default SelectLanguage;
