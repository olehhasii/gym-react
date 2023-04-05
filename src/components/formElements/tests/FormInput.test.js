import React from 'react';
import { render, screen } from '@testing-library/react';
import FormInput from '../FormInput';

describe('AuthInput', () => {
	test('renders label text', () => {
		render(
			<FormInput placeholder={'input'} register={() => {}} name='email' />
		);

		const placeholderText = screen.getByPlaceholderText('input');
		expect(placeholderText).toBeInTheDocument();
	});
});
