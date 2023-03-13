import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'
import PRODUCTS from '../../products';
import { ShopContext } from '../../context/shop-context';
import CartItem from './CartItem';
import './Cart.css';

export const Cart = () => {
  const { cartItems, getTotalAmount } = useContext(ShopContext);
  // useNavigate hook is used to redirect page to resp page
  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if(cartItems[product.id] !== 0){
            return(
              <CartItem data={product} />
            )
          }
        })}
      </div>
      {getTotalAmount() > 0 ?(
          <div className="checkout">
            <p>Subtotal: Rs {getTotalAmount()}</p>
            <button onClick={() => navigate("/")}>Continue Shopping</button>
            <button>Checkout</button>
          </div>
        ) : (
          <h1>Your car is empty!</h1>
        )
      }
    </div>
  )
}
