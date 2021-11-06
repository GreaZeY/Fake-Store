import useGetProducts from "../../useGetProducts";
import Loader from "../Loader/Loader";
import Product from "../Products/Product";
import { Fragment ,useEffect,useState } from "react";
import MetaData from "../MetaData"
const Search = ({ match }) => {
  const { loading, error, products } = useGetProducts(4);
const [results,setResults] = useState([])
  useEffect(() => {
    setResults(products.filter(product => 

      product.title
        .toLowerCase()
        .includes(match.params.query.toLowerCase()) |
      product.category
        .toLowerCase()
        .includes(match.params.query.toLowerCase()) |
      product.description
        .toLowerCase()
        .includes(match.params.query.toLowerCase())

  ))
  }, [match.params.query,products]); 

  return (
    <Fragment>
      {
        <div className="container">
          {
          results.length!==0? 
          !loading &&
          <h1 className="heading" style={{height:"auto",width:"auto"}} >{`Search results for ${match.params.query}`}</h1>
          :
          !loading&&
          <h1 className="heading" style={{height:"auto",width:"auto"}} >No results found for{` ${match.params.query}`}</h1>
        }
          <div id="products" className="ProdContainer">
          <MetaData title={`Search results for ${match.params.query}`}  />
            {results&&
              results.map((product)=>{ return <Product key={product.id} product={product} />}) 
            }
          
               
           
            <div class="load">{loading && <Loader />}</div>
            <div class="error">{error && "Something went wrong"}</div>
          </div>
        </div>
      }
    </Fragment>
  );
};

export default Search;
