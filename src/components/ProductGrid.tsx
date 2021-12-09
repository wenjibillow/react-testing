import ProductCard from '../components/ProductCard'
import { Products } from '../models/Products'

const data: Products[] = [
  {id: 1, name: 'Jeans', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},

  {id: 2, name: 'Jeans xs', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},
  {id: 3, name: 'Jeans s', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},
  {id: 4, name: 'Jeans m', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},
  {id: 5, name: 'Jeans l', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},
  {id: 6, name: 'Jeans xl', price: 449, imgUrl: 'https://en.wikipedia.org/wiki/Jeans#/media/File:Jeans.jpg'},
]

interface Props {
  searchString: string 
}

const ProductGrid = ({searchString}: Props) => {
  const filteredData = data.filter(product => product.name.toLowerCase().includes(searchString.toLowerCase())) 

  return(
    <main className="card-grid">
      {filteredData.map(product => (
        <ProductCard key={product.id} products={product} />
      ))}
    </main>
  )
}

export default ProductGrid 
