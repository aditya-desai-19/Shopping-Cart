import React,{useContext} from 'react';
import {ShopContext} from '../../context/shop-context';

const Product = (props) => {
  const{id, name, image, price} = props.data;
  const {addToCart, cartItems} = useContext(ShopContext);

  // Display no. of items added
  const cartItemAmount = cartItems[id]; 
  return (
    <div  className='product'>
      <img src={image} alt="Shirt image" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>
          <b>Rs {price}</b>
        </p>
        <button className='addToCartBttn' onClick={() => addToCart(id)}>
          Add To Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}
        </button>
      </div>
    </div>
  )
}

export default Product;