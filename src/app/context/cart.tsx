'use client'
import type { ProductsProps } from '@/types/Cart'
import React, { createContext, type ReactNode, useContext, useState } from 'react'



type Cart = {
  cart: ProductsProps[],
  addProductInCart: (newProduct: ProductsProps) => void
  RemoveQuantity: (id: string | number) => void
  addQuantity: (id: string | number) => void
  getTotalPriceInCart: () => number | null
  getTotalQuantityInCart: (id: number | string) => number | null
  getTotalInCart: () => number,
  removerProduct: (id: string | number) => void,
  cleanCart: () => void
}
type CartContextProvinderProps = {
  children: ReactNode
}

export const CartContext = createContext({} as Cart)

export function CartContextProvinder({ children }: CartContextProvinderProps) {
  const [cart, setCart] = useState<ProductsProps[]>([]);


  function addProductInCart(newProduct: ProductsProps) {
    const result = {
      ...newProduct,
      quantity: 1
    }

    setCart(state => [...state, result])
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
          quantity: item.quantity + 1
        }
      }
      return item
    })
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

  const getTotalPriceInCart = (): number => {
    return cart.reduce((acc, current) => {
      return acc + current.price * current.quantity
    }, 0)
  }


  const getTotalInCart = () => {
    return cart.reduce((acc, current) => {
      return acc + current.quantity
    }, 0)
  }

  const removerProduct = (id: number | string) => {
    setCart(state => state.filter((item) => item.id !== id))
  }

  const cleanCart = () => {
    setCart([])
  }

  const getTotalQuantityInCart = (id: number | string) => {
    const item = cart.find((item) => item.id === id);

    if (item) {
      return item.quantity;
    }

    return null;
  };

  return (
    <CartContext.Provider value={{
      getTotalInCart,
      cleanCart,
      getTotalQuantityInCart,
      cart,
      addProductInCart,
      RemoveQuantity,
      addQuantity,
      getTotalPriceInCart,
      removerProduct
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
