import React from 'react';
import { useSelector } from 'react-redux';

import NutritionMacros from '../../components/nutrition/macros/NutritionMacros';
import NutritionNoUserParams from './NutritionNoUserParams';

const Nutrition = () => {
	const userParameters = useSelector((state) => state.userInfo.parameters);
	if (!userParameters) {
		return <NutritionNoUserParams />;
	}
	return <NutritionMacros />;
};

export default Nutrition;
