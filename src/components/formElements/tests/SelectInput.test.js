import { fireEvent, render, screen } from '@testing-library/react';
import SelectInput from '../SelectInput';

describe('SelectInput Componnet', () => {
	const options = [
		{ label: 'Monday', value: 1 },
		{ label: 'Tuesday', value: 2 },
	];

	test('should render select input', () => {
		render(
			<SelectInput
				options={options}
				value={[]}
				placeholder={'select input'}
				onChange={() => {}}
				multiple={true}
			/>
		);

		const select = screen.getByText('select input');

		expect(select).toBeInTheDocument();
	});

	it('should render with options', () => {
		const { getByTestId, getByText } = render(
			<SelectInput
				options={options}
				placeholder='Select an option'
				value={null}
				onChange={() => {}}
			/>
		);

		const selectInput = getByTestId('select-input');
		expect(selectInput).toBeInTheDocument();
		/* expect(selectInput).toHaveTextContent('Select an option'); */

		fireEvent.click(selectInput);
		expect(getByText('Monday')).toBeInTheDocument();
		expect(getByText('Tuesday')).toBeInTheDocument();
	});
});
