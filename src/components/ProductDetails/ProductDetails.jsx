import{ Fragment, useEffect,useState } from "react";
import "./ProductDetals.css";
import ReactStars from "react-rating-stars-component";
import Loader from "../Loader/Loader";
import MetaData from "../MetaData";
import axios from "axios";

const ProductDetails = ({ match }) => {

  const [product,setProduct]= useState([])
  const [loading,setLoading]= useState(false)

  useEffect(() => {
    setLoading(true)
   axios.get(`https://fakestoreapi.com/products/${match.params.id}`).then(res=>{
        console.log("my call",res)
        setProduct(res.data)
        setLoading(false)
    })

  }, [match.params.id]);

  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "tomato",
    size: window.innerWidth < 640 ? 11 : 23,

    isHalf: true,
  };


  const addToCart = ()=>{
    let cartItems = JSON.parse(localStorage.getItem('mycart'))
    if(!cartItems) return localStorage.setItem('mycart',JSON.stringify([product]))
    cartItems=cartItems.filter((item,i) => item.id !== product.id )
    cartItems.unshift(product)
    localStorage.setItem('mycart',JSON.stringify(cartItems))
    window.location="/my/cart"
}
  return (
    <Fragment>
      {loading ? (
        <div className="loaderpd">
          {" "}
          <Loader></Loader>
        </div>
      ) : (
        <Fragment>
          <MetaData title={`${product.title}`} />
          <div className="ProductDetails">
            <img draggable="false"  className="image" src={product.image} alt={product.title} />
            <div>
              <div className="detailsBlock-1">
                <h2>{product.title}</h2>
              </div>
              <div className="detailsBlock-2">
                {product.rating ? (
                  <ReactStars value={product.rating.rate} {...options} />
                ) : (
                  "0"
                )}
                {product.rating ? (
                  <span>({product.rating.count} Ratings)</span>
                ) : (
                  "Not rated yet"
                )}
              </div>
              <div className="detailsBlock-3">
                <h1>{`₹ ${parseInt(product.price * 70)}`}</h1>
                <div className="detailsBlock-3-1">
                  <div className="detailsBlock-3-1-1"></div>{" "}
                  <button onClick={addToCart}>Add to Cart</button>
                </div>
                <p>
                  Stock : <b className="greenColor">In Stock</b>
                </p>
              </div>
              <div className="detailsBlock-4">
                Description : <p>{product.description}</p>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
