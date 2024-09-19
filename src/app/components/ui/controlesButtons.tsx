'use client'
import React from 'react'
import { Button } from './Button'
import { useCart } from '@/app/context/cart'
import { Minus, Plus } from 'lucide-react'

type ControlesButtonsProps = {
    id: string | number
}


export function ControlesButtons({ id }: ControlesButtonsProps) {
    const { RemoveQuantity, addQuantity, removerProductFromCart, getTotalQuantityInCart } = useCart()

    return (
        <div className='flex items-center gap-3 justify-between'>
            <div className='flex items-center gap-2'>
                <Button
                    variant='primary'
                    size='lg'
                    type='button'
                    onClick={() => RemoveQuantity(id)}
                >
                    <Minus className='size-4 font-bold' />
                </Button>
                <span>{getTotalQuantityInCart(id)}</span>
                <Button
                    variant='primary'
                    size='lg'
                    type='button'
                    onClick={() => addQuantity(id)}
                >
                    <Plus className='size-4 font-bold' />
                </Button>
            </div>

            <Button
                variant='primary'
                size='lg'
                className='ml-auto'
                type='button'
                onClick={() => removerProductFromCart(id)}
            >
                Apagar do carinho
            </Button>
        </div>
    )
}
