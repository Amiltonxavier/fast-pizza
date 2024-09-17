'use client'

import { CartItem } from '@/app/components/ui/CartItem'
import { CONSTANT } from '@/app/constants'
import { useCart } from '@/app/context/cart'
import { ProductsProps } from '@/types/Cart'
import React, { useState } from 'react'

export default function Menu() {
  const [products, setProducts] = useState<ProductsProps[]>(CONSTANT.PRODUCTS)
  const { addProductInCart } = useCart()

  function handleAddProductInToCart(product: ProductsProps) {
    addProductInCart(product)

    const result = products.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          quantity: item.quantity - 1
        }
      }
      return item
    })

    
    setProducts(result)
  }
  return (
    <div className='flex flex-col gap-4 divide-y-2 py-4 w-full'>
      {
        products.map((item) => {
          return (
            <CartItem
              product={item}
              key={item.id}
              addToCart={handleAddProductInToCart}
            />
          )
        })
      }
    </div>
  )
}
