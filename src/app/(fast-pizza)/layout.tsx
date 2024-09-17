import React, { ReactNode } from 'react'
import Header from '../components/ui/header'
import { UserContextProvider } from '../context/user'
import { CartContextProvinder } from '../context/cart'

type LayoutProps = {
  children: ReactNode
}


export default function layout({ children }: LayoutProps) {
  return (
    <UserContextProvider>
      <CartContextProvinder>
        <div className='flex flex-col gap-4 bg-stone-100 text-stone-700 min-h-screen'>
          <Header />
          <div className='mx-auto'>
            {children}
          </div>
        </div>
      </CartContextProvinder>
    </UserContextProvider>
  )
}
