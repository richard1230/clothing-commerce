import { createContext, useState } from 'react';

export const addCartItem = (cartItems,productToAdd) => { 

}

export const CartContext = createContext({
  isCartOpen: false,
    setIsOpen: () => { },
    cartItems: [],
    addItemToCart: () => { }
});

export const CartProvider = ({ children }) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const addItemToCart = (product) =>
    setCartItems(addCartItem(cartItems, product));
  const value = { isCartOpen, setIsCartOpen,cartItems, addItemToCart };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
