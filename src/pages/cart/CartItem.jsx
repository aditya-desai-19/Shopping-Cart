import React, { useContext } from 'react'
import { ShopContext } from '../../context/shop-context';

const CartItem = (props) => {
    const{id, name, image, price} = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  return (
    <div className="cartItem">
        <img src={image} alt={name} />
        <div className="description">
            <p>{name}</p>
            <p>Rs {price}</p>
            <div className='countHandle'>
                <button onClick={() => removeFromCart(id)}>-</button>
                <input  value={cartItems[id]} onChange = {(e) => updateCartItemCount(Number(e.target.value), id)}/>
                <button onClick={() => addToCart(id)}>+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem