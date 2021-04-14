import React from 'react'
import { createContext } from 'react'
import useCart from '../hooks/useCart'

const CartContext = createContext([])

export default CartContext

export const CartProvider = ({ children }) =>
{
  return (
    <CartContext.Provider value={useCart([])}>
      {children}
    </CartContext.Provider>
  )
}