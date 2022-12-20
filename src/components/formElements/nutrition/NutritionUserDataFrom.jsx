import React from 'react';
import { useMiltistepForm } from '../../../hooks/useMiltistepForm';
import { useForm } from 'react-hook-form';
import { GiStairsGoal } from 'react-icons/gi';
import FormInput from '../FormInput';

const NutritionUserDataFrom = () => {
	const { steps, currentStepIndex } = useMiltistepForm([1, 2]);

	return (
		<div>
			<div>
				<div>
					<span className=''>
						<GiStairsGoal />
					</span>
				</div>
				<div>
					<span></span>
				</div>
				<div>
					<span></span>
				</div>
			</div>
			<form>
				<div>
					<input type='radio' name='radio' />
				</div>
				<div>
					<input type='radio' name='radio' />
				</div>
				<div>
					<input type='radio' name='radio' />
				</div>
			</form>
		</div>
	);
};

export default NutritionUserDataFrom;
