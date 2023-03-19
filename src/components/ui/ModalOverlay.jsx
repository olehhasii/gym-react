import React from 'react';
import { useTranslation } from 'react-i18next';

const ModalOverlay = ({ onClose, text, onConfirmHandler }, childern) => {
	const { t } = useTranslation();

	return (
		<>
			<div
				className='fixed left-0 top-0 w-full h-full bg-black opacity-50 overflow-hidden z-40'
				onClick={onClose}></div>
			<div className='p-8 bg-white absolute top-2/4 left-2/4 trans z-50 -translate-x-2/4 -translate-y-2/4 rounded'>
				<h3 className='font-bold text-2xl'>{text}</h3>
				<div className='flex gap-4 mt-6'>
					<button
						className='border-nono outline-none w-32 h-12 bg-green-400 font-bold hover:scale-110 duration-200'
						onClick={onConfirmHandler}>
						{t('trainings.workoutItem.modal.confirmBtn')}
					</button>
					<button
						className='border-none outline-none w-32 h-12 bg-red-400 font-bold hover:scale-110 duration-200'
						onClick={onClose}>
						{t('trainings.workoutItem.modal.cancelBtn')}
					</button>
				</div>
			</div>
		</>
	);
};

export default ModalOverlay;
