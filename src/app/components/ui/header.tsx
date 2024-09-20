import { DisplayUsername } from './display-username'
import { Input } from './input'
import Link from 'next/link'

export function Header() {
  return (
    <nav className='sticky w-full top-0 h-20 flex justify-between bg-yellow-400 items-center px-8 shadow-sm'>
      <Link href="/">
        <h3 className='text-lg sm:text-2xl leading-tight font-light tracking-widest uppercase'>
          Fast Pizza Co.
        </h3>
      </Link>
      <div className='flex-1 flex items-center gap-8 user justify-center'>
        <Input
          type='search'
          placeholder='Procurar Pedido #'
          className='hidden sm:block px-4 py-3 max-w-72 focus-within:max-w-80 transition-all duration-150 bg-yellow-100/80 text-sm font-mono mx-auto'
        />
      </div>
      {/*       <DisplayUsername /> */}
    </nav>
  )
}
