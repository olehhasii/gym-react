import React from 'react';
import { useForm, useFieldArray } from 'react-hook-form';
import { FaTrashAlt } from 'react-icons/fa';

import FormInput from '../../formElements/FormInput';

const AddMealForm = () => {
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

	const onSubmit = () => {};

	return (
		<form onSubmit={handleSubmit((data) => console.log(data))} className='mt-4'>
			<p className='mb-4 text-center font-bold '>
				{errors.food?.root?.message}
			</p>
			{fields.map((field, index) => {
				return (
					<div key={field.id} className='flex items-center gap-2'>
						<FormInput
							placeholder='Product name'
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
							placeholder='Weight g'
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
				Add product
			</button>
			{!errors.food?.root?.message && (
				<button
					type='submit'
					className='cursor-pointer bg-green-500 hover:scale-105 duration-300 h-10 w-32 rounded-md font-bold border-none ml-4'>
					Save meal
				</button>
			)}
		</form>
	);
};

export default AddMealForm;
