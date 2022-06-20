import { createContext, useState } from 'react';
import { Children } from 'react/cjs/react.production.min';

export const CartContext = createContext({
    isCartOpen: false,
    setIsOpen: () => { }
})

export const CartProvider = (props) => { 
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value = { isCartOpen, setIsCartOpen };

    return <CartContext.Provider value={value}>
        { props.children}
    </CartContext.Provider>

}