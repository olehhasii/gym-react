import React from 'react';
import { render, screen } from '@testing-library/react';
import FormStep from '../FormStep';

describe('FormStep', () => {
	test('renders form step component', () => {
		render(<FormStep text={'step'} />);

		const stepText = screen.getByText('step');
		expect(stepText).toBeInTheDocument();
	});

	test('form step should be gray color', () => {
		render(<FormStep text={'step'} />);

		const stepText = screen.getByText('step');

		expect(stepText.previousSibling).toHaveClass(
			'bg-gray-300 after:bg-gray-300'
		);
	});

	test('form step should be green', () => {
		render(<FormStep text={'step'} currentStep={true} />);

		const stepText = screen.getByText('step');

		expect(stepText.previousSibling).toHaveClass(
			'bg-green-500 after:bg-green-500'
		);
	});
});
