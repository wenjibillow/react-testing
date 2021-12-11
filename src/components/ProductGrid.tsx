import ProductCard from '../components/ProductCard'
import { Products } from '../models/Products'

const data: Products[] = [
  {id: 1, name: 'Jeans', price: 449, imgUrl: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'},

  {id: 2, name: 'Pajamas', price: 249, imgUrl: 'https://images.unsplash.com/photo-1605131545453-6044234368a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},
  {id: 3, name: 'Dress', price: 749, imgUrl: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80'},
  {id: 4, name: 'Skirt', price: 349, imgUrl: 'https://images.unsplash.com/photo-1564246614931-1be8ad768e63?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},
  {id: 5, name: 'Top', price: 149, imgUrl: 'https://images.unsplash.com/photo-1604994183234-a311cba28474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'},
  {id: 6, name: 'Scarf', price: 249, imgUrl: 'https://images.unsplash.com/photo-1609803384370-0e73ef8d424f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80'},
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
