
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
})
