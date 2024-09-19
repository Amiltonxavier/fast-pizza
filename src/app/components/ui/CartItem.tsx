'use client'
import React from 'react'
import { Button } from './Button'
import Image from 'next/image'
import type { ProductsProps } from '@/types/Cart'
import { ConvertCurrency } from '@/utils/currency'
import { useCart } from '@/app/context/cart'
import { ControlesButtons } from './controlesButtons'

type CartItemProps = {
    product: ProductsProps
    addToCart: (product: ProductsProps) => void
}

export function CartItem({ product, addToCart }: CartItemProps) {
    const { cart } = useCart()


    const isInCart = (id: number | string) => {
        return !!cart.find(item => item.id === id)
    }

    return (
        <div className='flex gap-2'>
            <div className='size-32 overflow-hidden'>
                <Image
                    src={product.img}
                    quality={100}
                    width={100}
                    height={100}
                    alt='pizza'
                    className='h-full w-full object-cover'
                />
            </div>

            <div className='flex flex-col gap-0.5 w-full'>
                <h5 className='font-medium'>{product.name}</h5>
                <p className=' text-zinc-500 italic font-mono text-base capitalize'>
                    {product.ingredients}
                </p>
                <div className='mt-auto flex justify-between items-end'>
                    <p className='text-sm'>
                        {ConvertCurrency.CurrencytoKwanza(product.price)}
                    </p>
                    {
                        isInCart(product.id) ? (
                            <ControlesButtons id={product.id} />
                        ) : (
                            <>
                                {
                                    product.quantity > 0 && (
                                        <Button
                                            variant='primary'
                                            size='lg'
                                            className='ml-auto'
                                            type='button'
                                            onClick={() => addToCart(product)}
                                        >
                                            Add ao carinho
                                        </Button>
                                    )
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
