import React, { useEffect, useState } from "react";
import "./Cart.css";
import MetaData from "../MetaData";
const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  var Total = 0;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("mycart"));
    if (!items) return;
    setCartItems(items);
  }, []);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("mycart"));
    if (!items) return;
    items.map((item) => (Total += Math.floor(item.price * 70)));
    setTotal(Total);
  }, [cartItems]);

  const back = () => {
    window.history.back();
  };

  const deleteItem = (e) => {
    let cItems = JSON.parse(localStorage.getItem("mycart"));
    cItems = cItems.filter(item=>item.id!==e)
    localStorage.setItem("mycart", JSON.stringify(cItems));
    setCartItems(cItems);
  };
  return (
    <div className="cart">
      <div className="top">
        <button onClick={back} className="back">
          <svg
            id="arrow"
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="arrow-left"
            class="svg-inline--fa fa-arrow-left fa-w-14"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"
            ></path>
          </svg>
        </button>
        <div className="total">
          <p>{`Subtotal (${cartItems.length} items): ₹${total}`}</p>
          <button disabled={total===0?true:false} onClick={()=>window.location='/checkout/OMG/youGotAGift'}>Proceed to Buy</button>
        </div>
      </div>

      <div className="cartContainer">
        <MetaData title="My Cart" />
        <div className="index">
          <h1>Your Items</h1>
          <p>Price</p>
        </div>

        {cartItems.length !== 0 ? (
          cartItems.map((item) => {
            return (
              
              <div key={item.id} className="citems">
                <a href={`/product/${item.id}/${item.title}`}><img draggable="false" src={item.image} alt={item.title} /></a> 
                <div className="right">
                <a href={`/product/${item.id}/${item.title}`}><h1>{item.title}</h1></a>
                  <div className="block">
                    <span>In stock</span>
                    <p>{item.category.toUpperCase()}</p>
                    <p>Quantity: 1</p>
                    <button key={item.id} onClick={() => deleteItem(item.id)}>
                      Delete
                    </button>
                  </div>
                </div>
                <p className="price">₹{Math.floor(item.price * 70)}</p>
              </div>
            );
          })
        ) : (
          <p>You Cart is empty :(</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
