
//import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react'
import ProductCard from './ProductCard'
import { Products } from '../models/Products'

describe('ProductCard component', () => {

  it('renders ProductCard without errors', () => {
    //smoke test
    const testData: Products = { id: 1, name: 'Jeans', price: 499, imgUrl: '' }
    render(<ProductCard products={testData} />)
    
  })

  it('renders product name and price', () => {
    const testData: Products = { id: 234, name: 'Underwear', price: 10, imgUrl: ''}
    render(<ProductCard products={testData} />)

    screen.getByText(testData.name, { exact: false })
    screen.getByText(testData.price, { exact: false })
  })

  it('uses correct src', () => {
    const testData: Products = { id: 4, name: 'hat', price: 100, imgUrl: 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'}
    const { getByAltText } = render (<ProductCard  products={testData} />)
    const image = getByAltText('clothing')
    
    expect(image).toHaveAttribute('src', 'https://images.unsplash.com/photo-1561375807-5af05d4d7fa8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')
  })

  it('renders add to cart button', () => {
    const testData: Products = { id: 23, name: '', price: 110, imgUrl: ''}
    render(<ProductCard products={testData} /> )
    expect(screen.getByTestId('add-to-cart-btn')).toBeInTheDocument()
  })
})
