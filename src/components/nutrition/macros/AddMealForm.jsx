import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaTrashAlt } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';

import { setDailyMacros } from '../../../redux/actions/dailyMacrosActions';
import FormInput from '../../formElements/FormInput';
import api from '../../../features/api';
import { useTranslation } from 'react-i18next';

const AddMealForm = ({ mealName, onCloseOpened }) => {
	const date = useSelector((state) => state.dailyMacros.date);
	const dispatch = useDispatch();
	const {
		handleSubmit,
		register,
		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			food: [{ name: '', weight: 0 }],
		},
	});

	const { fields, append, remove } = useFieldArray({
		name: 'food',
		control,
		rules: {
			required: 'Please add at least 1 product',
		},
	});

	const onSubmit = (data) => {
		const dataForUpdate = { date, name: mealName, ...data };
		api.patch('/meals/update-meal', dataForUpdate).then(() => {
			dispatch(setDailyMacros(date));
			onCloseOpened();
		});
	};

	const { t } = useTranslation();

	return (
		<form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
			<p className='mb-4 text-center font-bold '>
				{errors.food?.root?.message}
			</p>
			{fields.map((field, index) => {
				return (
					<div key={field.id} className='flex items-center gap-2'>
						<FormInput
							placeholder={t('nutrition.macros.productName')}
							register={register}
							registerName={`food.${index}.name`}
							min={2}
							height='h-10'
							width='w-64'
							max={20}
							required={true}
						/>
						<FormInput
							type='number'
							placeholder={t('nutrition.macros.weight')}
							register={register}
							registerName={`food.${index}.weight`}
							height='h-10'
							width='w-18'
							min={1}
							max={2000}
							required={true}
						/>
						<FaTrashAlt
							className='w-6 h-6 mb-4 cursor-pointer'
							onClick={() => remove(index)}
						/>
					</div>
				);
			})}
			<button
				type='button'
				className='cursor-pointer bg-green-500 hover:scale-105 duration-300 h-10 w-32 rounded-md font-bold border-none '
				onClick={() => append({ name: '', weight: 0 })}>
				{t('nutrition.macros.addProduct')}
			</button>
			{!errors.food?.root?.message && (
				<button
					type='submit'
					className='cursor-pointer bg-green-500 hover:scale-105 duration-300 h-10 w-32 rounded-md font-bold border-none ml-4'>
					{t('nutrition.macros.saveMeal')}
				</button>
			)}
		</form>
	);
};

export default AddMealForm;
