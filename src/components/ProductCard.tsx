import { Products } from '../models/Products'
import '../App.css'

interface Props {
  products: Products 
}

const ProductCard = ({ products }: Props)=> {
 return( 
    <section className="productCard">
		<img className="image" src={products.imgUrl} alt="" /> 
		{/* <div className="image"> {products.imgUrl} </div> */}
		<h3> {products.name} </h3>
		<p> {products.price} kr </p>
	</section>
   
 )
}

export default ProductCard





