'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TotalInCart } from '../total -in-cart'
import { useCart } from '@/context/cart'

export function Cart() {
  const { totalInCart } = useCart()

  if (totalInCart === 0) return
  return (

    <div className='sticky bottom-0 bg-stone-800 w-full z-10'>
      <div className='transition-all duration-150 ease-in-out flex flex-col sm:flex-row justify-start items-center py-8 px-4 sm:px-8 sm:justify-between font-mono uppercase text-stone-100 font-medium text-xl sm:text-2xl'>
        <TotalInCart />
        <Link href="/cart" className='flex items-center gap-4 hover:underline'>
          Abrir Carrinho <ArrowRight />
        </Link>
      </div>
    </div>
  )
}
