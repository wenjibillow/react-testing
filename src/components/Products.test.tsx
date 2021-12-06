
import '@testing-library/jest-dom'

import {render, screen} from '@testing-library/react'
import Products from './Products'

test('loads and displays Products message', () => {
  render(<Products />)
  const linkElement = screen.getByText(/products/i)
  expect(linkElement).toBeInTheDocument()
})
