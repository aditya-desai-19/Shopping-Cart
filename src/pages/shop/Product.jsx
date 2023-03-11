import React,{useContext} from 'react';
import {ShopContext} from '../../context/shop-context';

const Product = (props) => {
  const{id, name, image, price} = props.data;
  const {addToCart} = useContext(ShopContext);
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
          Add To Cart
        </button>
      </div>
    </div>
  )
}

export default Product;