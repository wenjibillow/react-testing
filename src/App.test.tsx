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

	it('shows matching product when typing in the search field', () => {
	// Integration test
	const wrapper = mount(<App />)
	
	const searchString = 'jeans'
	const input = wrapper.find('header input')
	input.simulate('change', { target: { value: searchString } })

	const cards = wrapper.find('main.card-grid .productCard')
	const names = cards.find('h3')
	expect(names.length).toBe(1)

	names.forEach(name => {
		const actualName = name.text()
		expect(actualName.toLowerCase()).toMatch(searchString.toLowerCase())
  	})
  })
})
