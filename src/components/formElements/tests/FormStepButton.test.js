import { render, screen, fireEvent } from '@testing-library/react';

import FormStepButton from '../FormStepButton';

describe('FormStepButton Component', () => {
	test('renders auth button', () => {
		render(<FormStepButton text='Login' />);

		const btnText = screen.getByText('Login');
		expect(btnText).toBeInTheDocument();
	});

	test('click event should work', () => {
		const onClickEvent = jest.fn();

		render(<FormStepButton text='Click' onClick={onClickEvent} />);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(onClickEvent).toHaveBeenCalled();
	});
});
