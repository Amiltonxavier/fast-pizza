'use client'
import { ProductService } from '@/api/products'
import { CartItem } from '@/app/components/ui/CartItem'
import { useCart } from '@/app/context/cart'
import type { ProductsProps } from '@/types/Cart'
import React, { useEffect, useState } from 'react'

export default function Menu() {
  const [products, setProducts] = useState<ProductsProps[]>([])
  const { addProductInCart } = useCart()
  const productsService = new ProductService()

  const getProducts = async () => {
    const result = await productsService.get()
    setProducts(result)
  }

  useEffect(() => {
    getProducts()
  }, [])

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
    <div className='flex flex-col gap-4 divide-y-2 w-full'>
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
