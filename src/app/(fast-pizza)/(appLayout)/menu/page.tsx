import { ProductService } from '@/api/products'
import { CartItem } from '@/app/components/ui/CartItem'
import type { ProductsProps } from '@/types/Cart'
import React, { Suspense } from 'react'
import Loading from './loading'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Menu"
}

export default async function Menu() {

  const productsService = new ProductService()

  const products: ProductsProps[] = await productsService.get()
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
