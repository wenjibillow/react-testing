import { render, screen } from '@testing-library/react'
import App from './App'

describe('App component', () => {
	it('renders without errors', () => {
		render(<App />)
	})
})
