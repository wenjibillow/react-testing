import { render } from '@testing-library/react'
import ProductGrid from './ProductGrid'

describe('ProductGrid component', () => {
  it('renders without errors', () => {
    render(<ProductGrid searchString="" />)
  })
})