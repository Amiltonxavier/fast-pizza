import React, { type ReactNode } from 'react'
import { Header } from '../components/ui/header'
import { UserContextProvider } from '../../context/user'
import { CartContextProvinder } from '../../context/cart'
import { Cart } from '../components/ui/cart'

type LayoutProps = {
  children: ReactNode
}


export default function layout({ children }: LayoutProps) {
  return (
    <UserContextProvider>
      <CartContextProvinder>
        <div
          className='flex max-w-[1600px] flex-col gap-4 bg-stone-100 text-stone-700 min-h-screen'
        >
          <Header />
          <div className='px-2 sm:max-w-4xl mx-auto w-full mb-12 min-h-full'>
            {children}
          </div>
          <Cart />
        </div>
      </CartContextProvinder>
    </UserContextProvider>
  )
}
