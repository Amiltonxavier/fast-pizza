
'use client'
import React, { useMemo, type ReactNode } from 'react'
import { Header } from '../components/ui/header'
import { UserContextProvider } from '../../context/user'
import { CartContextProvinder } from '../../context/cart'
import { Cart } from '../components/ui/cart'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

type LayoutProps = {
  children: ReactNode
}




export default function layout({ children }: LayoutProps) {
  const queryClient = useMemo(() => new QueryClient(), [])
  return (
    <UserContextProvider>
      <CartContextProvinder>
        <QueryClientProvider client={queryClient}>
          <div className='flex flex-col min-h-screen bg-stone-100 text-stone-700'>
            <Header />
            <div className='flex-grow px-2 sm:max-w-4xl mx-auto w-full mt-4 mb-12 pb-20'>
              {children}
            </div>
            <Cart />
          </div>
        </QueryClientProvider>
      </CartContextProvinder>
    </UserContextProvider>


  )
}
