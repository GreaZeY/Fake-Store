import {useEffect,useState} from 'react'
import axios from "axios"

export default function useGetProducts(pageNumber) {
  const[loading,setLoading] = useState(true)
  const[error,SetError] = useState(false)
  const[products,setProducts]= useState([])
  const [hasMore,setHasMore]=useState(false)
  useEffect(()=>{
setLoading(true)
SetError(false)
    axios.get(`https://fakestoreapi.com/products/`).then(res=>{
      setProducts(prevProducts=>{
        return [...new Set([...prevProducts,...res.data])]
            })
      setHasMore(res.data.length>0)
      setLoading(false)
    }).catch(e=>{
      SetError(true)
    })
  },[pageNumber])
  return {loading,error,products,hasMore}
}
