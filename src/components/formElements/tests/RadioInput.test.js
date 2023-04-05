import { render, screen } from '@testing-library/react';
import RadioInput from '../RadioInput';

describe('RadioInput Component', () => {
	test('should render checked', () => {
		render(
			<RadioInput
				register={() => {}}
				labelText='checked'
				defaultChecked={true}
			/>
		);

		const radioInpt = screen.getByText('checked');
		expect(radioInpt).toBeInTheDocument();
	});
});
