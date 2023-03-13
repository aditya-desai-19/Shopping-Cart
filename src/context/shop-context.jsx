import PRODUCTS from 'products';
import React, { createContext, useState } from 'react'

// Context is used to pass props child component directly
export const ShopContext = createContext(null);

// Function to set cart item to zero value
const getDefaultCart = () => { 
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
};

export const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    // Function to add items to cart
    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
    };

    // Function to remove items from cart
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newValue, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newValue}));
    }

    const getTotalAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            if(cartItems[item] > 0){
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    
    const contextValue = {cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalAmount};

  return (
    <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}
