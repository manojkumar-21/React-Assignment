
import React, { useState, useEffect} from 'react';
import './Cart.css';
import axios from 'axios';

function Cart() {
    const [cartItems, setCartItems] = useState([]);
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;

    useEffect(() => {
        setCartItems(JSON.parse(localStorage.getItem("mycartItems")));
    }, []);


    return (
        <div className='cart-maincontainer'>
            <h1>CART ITEMS</h1>
        
            <div>
                {
                    cartItems.map((cartItem,index) => (
                        <div className="cart-container bg-white rounded" key={cartItem.id}>
                        <div className='product-img'>
                        <img className="" src={cartItem.image} alt="" />
                        </div>
                        <div className='product-info'>
                            <div>
                                <h2>{cartItem.title}</h2>
                                <p>{cartItem.category}</p>
                            </div>
                            <div>
                                <p>{cartItem.qty} X {cartItem.price} = {cartItem.qty * cartItem.price}</p>    
                            </div>
                        </div>  
                    </div>
                
                    ))
                }
                <div className='total-products'>
                    <hr></hr>
                    <div className="row">
                    <div className="col-2">Items Price</div>
                    <div className="col-1 text-right">{itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                    <div className="col-2">Tax Price</div>
                    <div className="col-1 text-right">{taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                    <div className="col-2">Shipping Price</div>
                    <div className="col-1 text-right">
                        {shippingPrice.toFixed(2)}
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-2">
                        <strong>Total Price</strong>
                    </div>
                        <div className="col-1 text-right">
                            <strong>{totalPrice.toFixed(2)}</strong>
                    </div>
                    </div>
                        <hr />
                </div>
                        
            </div>
        </div>
            
    )
}

export default Cart;
