import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header component', () => {
	it('renders without errors', () => {
		render(<Header />);
	});
})
