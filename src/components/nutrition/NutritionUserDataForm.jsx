import React from 'react';
import { useMiltistepForm } from '../../hooks/useMiltistepForm';
import { useForm } from 'react-hook-form';

import NutritionFormSteps from './NutritionFormSteps';
import ContinueButton from '../formElements/ContinueButton';

const NutritionUserDataForm = () => {
	const { steps, currentStepIndex } = useMiltistepForm([1, 2]);

	return (
		<div className=''>
			<NutritionFormSteps />
			<form>
				<div className='h-16 flex items-center mb-4 relative'>
					<input
						type='radio'
						name='radio'
						id='lose'
						className='appearance-none font-bold p-2 px-4 border-2 border-gray-200 h-full w-full rounded-lg flex items-center checked:bg-green-100 checked:border-green-300 cursor-pointer'
					/>
					<label
						for='lose'
						className='font-bold absolute left-6 cursor-pointer'>
						Lose weight
					</label>
				</div>
				<div className='h-16 flex items-center mb-4 relative'>
					<input
						type='radio'
						name='radio'
						id='gain'
						className='appearance-none font-bold p-2 px-4 border-2 border-gray-200 h-full w-full rounded-lg flex items-center checked:bg-green-100 checked:border-green-300 cursor-pointer'
					/>
					<label
						for='gain'
						className='font-bold absolute left-6 cursor-pointer'>
						Gain weight
					</label>
				</div>
				<div className='h-16 flex items-center mb-4 relative'>
					<input
						type='radio'
						name='radio'
						id='maintain'
						className='appearance-none font-bold p-2 px-4 border-2 border-gray-200 h-full w-full rounded-lg flex items-center checked:bg-green-100 checked:border-green-300 cursor-pointer'
					/>
					<label
						for='maintain'
						className='font-bold absolute left-6 cursor-pointer'>
						Maintain weight
					</label>
				</div>
				<ContinueButton />
			</form>
		</div>
	);
};

export default NutritionUserDataForm;
