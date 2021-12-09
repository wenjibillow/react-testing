import { Products } from '../models/Products'
import '../App.css'

interface Props {
  products: Products 
}

const ProductCard = ({ products }: Props)=> {
 return( 
    <section className="productCard">
		<div className="image"> image </div>
		<h3> {products.name} </h3>
		<p> {products.price} </p>
	</section>
   
 )
}

export default ProductCard





