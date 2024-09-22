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
        <div className='flex flex-col min-h-screen bg-stone-100 text-stone-700'>
          <Header />
          <div className='flex-grow px-2 sm:max-w-4xl mx-auto w-full mt-4 mb-12 pb-20 animate-fadeIn'>
            {children}
          </div>
          <Cart />
        </div>
      </CartContextProvinder>
    </UserContextProvider>
  )
}
