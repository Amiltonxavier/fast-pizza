import React, { type ReactNode } from 'react'
import Header from '../components/ui/header'
import { UserContextProvider } from '../context/user'
import { CartContextProvinder } from '../context/cart'
import { Cart } from '../components/ui/cart'
import { OrdersContextProvinder } from '../context/orders'

type LayoutProps = {
  children: ReactNode
}


export default function layout({ children }: LayoutProps) {
  return (
    <UserContextProvider>
      <CartContextProvinder>
        <OrdersContextProvinder>
          <div className='flex flex-col gap-4 bg-stone-100 text-stone-700 min-h-screen'>
            <Header />
            <div className='mx-auto px-4 py-3 max-w-[1600]'>
              {children}
            </div>
            <Cart />
          </div>
        </OrdersContextProvinder>
      </CartContextProvinder>
    </UserContextProvider>
  )
}
