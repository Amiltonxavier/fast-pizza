'use client'
import React from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { TotalInCart } from '../total -in-cart'
import { useCart } from '@/app/context/cart'

export function Cart() {
  const { totalInCart } = useCart()

  if (totalInCart === 0) return
  return (
    <div className='fixed bottom-0 bg-stone-800 w-full'>
      <div className='flex items-center p-8 justify-between font-mono uppercase text-stone-100 font-medium text-2xl'>
        <TotalInCart />

        <Link href="/cart" className='flex items-center gap-4'>
          Abrir Carrinho <ArrowRight />
        </Link>

      </div>
    </div>
  )
}
