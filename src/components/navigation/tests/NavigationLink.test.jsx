import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NavigationLink from '../NavigationLink';

describe('NavigationLink', () => {
	test('renders link text', () => {
		render(
			<MemoryRouter>
				<NavigationLink linkText='Home' linkUrl='/' />
			</MemoryRouter>
		);

		const linkText = screen.getByText('Home');
		expect(linkText).toBeInTheDocument();
	});

	test('renders link url', () => {
		render(
			<MemoryRouter>
				<NavigationLink linkText='Home' linkUrl='/' />
			</MemoryRouter>
		);

		const linkUrl = screen
			.getByRole('link', { name: 'Home' })
			.getAttribute('href');
		expect(linkUrl).toBe('/');
	});

	test('renders full link style when isFull is true', () => {
		render(
			<MemoryRouter>
				<NavigationLink linkText='Home' linkUrl='/' isFull={true} />
			</MemoryRouter>
		);

		const link = screen.getByRole('link', { name: 'Home' });
		expect(link).toHaveClass('px-6 py-3');
	});

	test('renders small link style when isFull is false', () => {
		render(
			<MemoryRouter>
				<NavigationLink linkText='Home' linkUrl='/' isFull={false} />
			</MemoryRouter>
		);

		const link = screen.getByRole('link', { name: 'Home' });
		expect(link).toHaveClass('pt-3 pb-1');
	});
});
