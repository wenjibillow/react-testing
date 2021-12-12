import { Products } from '../models/Products'
import '../App.css'

interface Props {
  products: Products 
}

const ProductCard = ({ products }: Props)=> {
 return( 
    <section className="productCard">
		<img className="image" src={products.imgUrl} alt="clothing" /> 
		<h3> {products.name} </h3>
		<p> {products.price} kr </p>
		<button className="addtocart-btn" data-testid="add-to-cart-btn">Add to Cart</button>
	</section>
   
 )
}

export default ProductCard





