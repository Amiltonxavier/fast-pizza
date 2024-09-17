'use client'
import { CartProps, ProductsProps } from '@/types/Cart'
import React, { createContext, ReactNode, useContext, useState } from 'react'



type Cart = {
  cart: ProductsProps[],
  addProductInCart: (newProduct: ProductsProps) => void
  RemoveQuantity: (id: string | number) => void
  addQuantity: (id: string | number) => void
  getTotalInCart: (id: number | string) => void
}
type CartContextProvinderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as Cart)

export function CartContextProvinder({ children }: CartContextProvinderProps) {
  const [cart, setCart] = useState<ProductsProps[]>([]);


  function addProductInCart(newProduct: ProductsProps) {
    setCart(state => [...state, newProduct])
  }

  function addQuantity(id: string | number) {

    const controles = (quantity: number) => {
      const add = quantity + 1
      if (add > quantity) return quantity

      return add
    }

    const result = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: controles(item.quantity)
        }
      }
      return item
    })
    console.log(result)
    setCart(result)
  }

  function RemoveQuantity(id: string | number) {

    const controles = (quantity: number) => {
      const add = quantity - 1
      if (add > quantity) return quantity

      return add
    }

    const result = cart.map(item => {
      if (item.id === id) {
        return {
          ...item,
          quantity: controles(item.quantity)
        }
      }
      return item
    })

    setCart(result)
  }

  const getTotalInCart = (id: number | string) => {
    return cart.find((item) => (item.quantity))
}

  return (
    <CartContext.Provider value={{ cart, addProductInCart, RemoveQuantity, addQuantity, getTotalInCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
