'use client'
import React from 'react'
import { DisplayUsername } from './display-username'
import { Input } from './input'
import { useUser } from '@/app/context/user'

export default function Header() {
  const { user } = useUser()
  return (
    <nav className='h-16 flex justify-between bg-yellow-400 items-center px-4 shadow-sm'>
      <h3> Fast Pizza Co.</h3>
      <div className={`flex-1 flex items-center gap-8 ${user ? 'justify-center': 'justify-end'}`}>
        <Input
          placeholder='Procurar Pedido #'
          className='px-4 py-0 text-sm text-yellow-700/55 font-mono mx-auto' />
       

      </div>
      {
          user && (
            <DisplayUsername />
          )
        }
    </nav>
  )
}
