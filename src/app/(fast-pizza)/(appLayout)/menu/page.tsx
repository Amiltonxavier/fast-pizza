import { ProductService } from '@/api/products'
import { CartItem } from '@/app/components/ui/CartItem'
import { useCart } from '@/context/cart'
import type { ProductsProps } from '@/types/Cart'
import React, { Suspense } from 'react'
import Loading from './loading'

export default async function Menu() {

  const productsService = new ProductService()

  const products: ProductsProps[] = await productsService.get()
  /* function handleAddProductInToCart(product: ProductsProps) {
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
  } */
  return (
    <div className='flex flex-col gap-4 divide-y-2 w-full'>
      <Suspense fallback={<Loading />}>
        {
          products.map((item) => {
            return (
              <CartItem
                product={item}
                key={item.id}
              />
            )
          })
        }
      </Suspense>
    </div>
  )
}
