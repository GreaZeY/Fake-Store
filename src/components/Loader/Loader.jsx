import React from 'react'
import "./Loader.css"
const Loader = () => {
    return (
        <div className="loader">
        <svg className="svg" width="3vmax" height="3vmax" viewBox="0 0 100 100">
  <polyline className="line-cornered stroke-still" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
  <polyline className="line-cornered stroke-still" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
  <polyline className="line-cornered stroke-animation" points="0,0 100,0 100,100" strokeWidth="10" fill="none"></polyline>
  <polyline className="line-cornered stroke-animation" points="0,0 0,100 100,100" strokeWidth="10" fill="none"></polyline>
</svg>
</div>
    )
}

export default Loader
