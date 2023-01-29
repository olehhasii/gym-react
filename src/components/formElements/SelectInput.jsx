import React, { useEffect, useState } from 'react';

import { FaChevronDown } from 'react-icons/fa';

const SelectInput = ({ multiple, value, onChange, options, placeholder }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [highlightedIndex, setHighlightedIndex] = useState();

	const cleaOptions = () => {
		multiple ? onChange([]) : onChange(undefined);
	};

	const selectOption = (option) => {
		if (multiple) {
			if (value.includes(option)) {
				onChange(value.filter((o) => o !== option));
			} else {
				onChange([...value, option]);
			}
		} else {
			if (option !== value) onChange(option);
		}
	};

	const isOptionSelected = (option) => {
		return multiple ? value.includes(option) : option === value;
	};

	useEffect(() => {
		setHighlightedIndex(undefined);
	}, [isOpen]);

	return (
		<div
			onBlur={() => setIsOpen(false)}
			onClick={() => setIsOpen((prev) => !prev)}
			tabIndex={0}
			className='relative flex-grow w-full min-h-[3.5rem] p-2 flex items-center gap-4 border border-gray-300 rounded-lg outline-none focus:border-black'>
			<span className='flex-grow gap-3 flex flex-wrap'>
				{multiple &&
					value.map((v) => (
						<button
							key={v.value}
							onClick={(e) => {
								e.stopPropagation();
								selectOption(v);
							}}
							className='p-2 flex items-center gap-2 border border-gray-300 rounded-lg cursor-pointer bg-none outline-none hover:bg-red-400 hover:border-red-400 duration-150'>
							{v.label}
							<span>&times;</span>
						</button>
					))}

				{value && !multiple && value?.label}
				{multiple && value.length === 0 && (
					<span className='text-gray-400'>{placeholder}</span>
				)}
			</span>
			<button
				onClick={(e) => {
					e.stopPropagation();
					cleaOptions();
				}}
				type='button'
				className='bg-none border-none outline-none cursor-pointer text-2xl hover:scale-110 duration-150'>
				&times;
			</button>
			<div className='self-stretch bg-gray-300 w-px'></div>
			<FaChevronDown className='cursor-pointer' />
			<ul
				className={`${
					isOpen ? 'block' : 'hidden'
				} bg-white list-none m-0 p-0 max-h-48 w-full absolute z-50 left-0 top-[calc(100%+0.25em)] overflow-auto border border-gray-300 rounded-lg`}>
				{options.map((option, index) => (
					<li
						key={option.value}
						onMouseEnter={() => setHighlightedIndex(index)}
						onClick={(e) => {
							e.stopPropagation();
							selectOption(option);
							setIsOpen(false);
						}}
						className={`${isOptionSelected(option) ? 'bg-green-300' : ''} ${
							index === highlightedIndex ? 'bg-green-200' : ''
						}  p-3 cursor-pointer`}>
						{option.label}
					</li>
				))}
			</ul>
		</div>
	);
};

export default SelectInput;
