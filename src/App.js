import React from 'react'
import { BrowserRouter as Router,Route } from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header"
import Products from "./components/Products/Products"
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Search from "./components/Search/Search.jsx"
import Home from "./components/Home/Home.jsx"
import Cart from './components/Cart/Cart';
import Chekout  from './components/Chekout/Chekout.jsx';
import About  from './components/About/About.jsx';

function App() {
  
  return (
    <Router>
     <Header/>
     <Route exact path = "/" component={Home}/>
     <Route exact path = "/" component={Products}/>
     <Route exact path = "/product/:id/:name" component={ProductDetails}/>
     <Route exact path = "/searchresults/:query" component={Search}/>
     <Route exact path = "/my/cart" component={Cart}/>
     <Route exact path = "/checkout/OMG/youGotAGift" component={Chekout}/>
     <Route exact path = "/aboutUs" component={About}/>
     
   </Router>
  );
}

export default App;
