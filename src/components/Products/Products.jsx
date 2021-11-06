import React, { Fragment,useState} from "react";
import Loader from "../Loader/Loader";
import Product from "./Product.jsx";
import useGetProducts from "../../useGetProducts"
// import MetaData from "../MetaData"
import "./Product.css";
const Products = () => {
  const [pageNumber,setPageNumber]=useState(1)
  const  {loading,error,products} = useGetProducts(pageNumber)
      window.onscroll=function(){
      
        if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){
          console.log('end agaya tera')
          setPageNumber(pageNumber+1)
          console.log('jsx',pageNumber,products)
        }
      }

  return (
    <Fragment>
      {/* <MetaData title="Products" /> */}
      {(
        
        <div className="container">
          <h1 id="products" className="heading">Products</h1>
          <div className="ProdContainer">
            {products &&
              products.map((product, i) => {
                 return <Product   key={i} product={product} />
            })}
          </div>
          <div class="load">{loading&&<Loader />}</div>
        <div class="error">{error&&"Something went wrong"}</div>
        </div>
      )}
    </Fragment>
  );
};

export default Products;
