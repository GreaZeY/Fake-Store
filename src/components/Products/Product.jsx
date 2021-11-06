
import {Link} from "react-router-dom";
import ReactStars from "react-rating-stars-component";


const Product = ({product}) => {

    const addToCart = (e)=>{
        let cartItems = JSON.parse(localStorage.getItem('mycart'))
        if(!cartItems) return localStorage.setItem('mycart',JSON.stringify([product]))
        cartItems=cartItems.filter((item,i) => item.id !== product.id )
        cartItems.unshift(product)
        localStorage.setItem('mycart',JSON.stringify(cartItems))
        window.location="/my/cart"
    }
    

    const options = {
        edit:false,
        color:"rgba(20,20,20,0.1)",
        activeColor:"tomato",
        size:window.innerWidth<640?11:23,
        value:product.rating.rate,
        isHalf:true
    
    }
    return (
        <div className="card">
            <Link className="productCard" to={`/product/${product.id}/${product.title}`}>
            <img draggable="false"  src={product.image} alt={product.title}></img>
            <p>{product.title}</p>
            <div>
                <ReactStars {...options}>
            </ReactStars>
            <span>({product.rating.count} Ratings)</span>
            </div>
            <span>{'₹'+parseInt(product.price*70)}</span>
            </Link>
            <button key={product.id} onClick={()=>addToCart(product)}>Add to Cart</button>
         </div>
    );
};




export default Product;
