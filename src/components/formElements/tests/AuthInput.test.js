import React from 'react';
import { render, screen } from '@testing-library/react';
import AuthInput from '../AuthInput';

describe('AuthInput', () => {
	test('renders label text', () => {
		render(
			<AuthInput
				label='Email'
				register={() => {}}
				required={true}
				name='email'
			/>
		);

		const labelText = screen.getByText('Email');
		expect(labelText).toBeInTheDocument();
	});
});
