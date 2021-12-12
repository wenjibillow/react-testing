import { render } from '@testing-library/react'
import { mount } from 'enzyme'
import App from './App'
import ProductGrid from './components/ProductGrid'

describe('App component', () => {
	it('renders without errors', () => {
		render(<App />)
	})
})

describe('App component (integration)', () => {
	it('renders ProductGrid initially', () => {
		const wrapper = mount(<App />)
		const actual = wrapper.contains(<ProductGrid searchString="" />)
		expect(actual).toBe(true)
	})
})
