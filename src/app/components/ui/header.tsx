'use client'
import React from 'react'
import { DisplayUsername } from './display-username'
import { Input } from './input'
import { useUser } from '@/app/context/user'
import Link from 'next/link'

export default function Header() {
  const { user } = useUser()
  return (
    <nav className='h-20 flex justify-between bg-yellow-400 items-center px-8 shadow-sm'>
      <Link href="/"><h3 className='text-2xl leading-tight font-light tracking-widest uppercase'> Fast Pizza Co.</h3></Link>
      <div className={`flex-1 flex items-center gap-8 ${user ? 'justify-center' : 'justify-end'}`}>
        <Input
          placeholder='Procurar Pedido #'
          className='px-4 py-3 max-w-72 focus-within:max-w-80 transition-all duration-150 bg-yellow-100/80 text-sm font-mono mx-auto' />


      </div>
      {
        user && (
          <DisplayUsername />
        )
      }
    </nav>
  )
}
