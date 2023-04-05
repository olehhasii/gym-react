import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import AuthButton from '../AuthButton';

describe('Auth Button', () => {
	test('renders auth button', () => {
		render(<AuthButton text='Login' />);

		const btnText = screen.getByText('Login');
		expect(btnText).toBeInTheDocument();
	});

	test('click event should work', () => {
		const onClickEvent = jest.fn();

		render(<AuthButton text='Click' onClick={onClickEvent} />);

		const button = screen.getByRole('button');

		fireEvent.click(button);

		expect(onClickEvent).toHaveBeenCalled();
	});
});
