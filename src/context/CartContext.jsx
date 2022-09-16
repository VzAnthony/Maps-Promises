import { createContext, useContext, useState } from 'react'

const context = createContext()

export const useCartContext = () => {
    const contextData = useContext(context)
    return contextData
}

export const CartContext = ({ children }) => {

    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart([...cart, item])
    }

    console.log(cart)


  return (
    <context.Provider value={ { cart, addToCart } }>
        {children}
    </context.Provider>
  )
}
