import { fireEvent, render, screen } from '@testing-library/react';
import { Simulate } from 'react-dom/test-utils';
import Login from './Login';

describe('Login component', () => {
	it('renders without errors', () => {
		//smoke test
		render(<Login />);
	})
})
