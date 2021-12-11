import { render, screen } from '@testing-library/react';
import Login from './Login';

describe('Login component', () => {
	it('renders without errors', () => {
		//smoke test
		render(<Login />);
	});
})
