'use client'

import React from 'react'
import { Button } from './Button'
import Image from 'next/image'
import img from '../../assets/pizza-1.jpg'
import { CartProps, ProductsProps, Status } from '@/types/Cart'
import { ConvertCurrency } from '@/utils/currency'
import { useCart } from '@/app/context/cart'

type CartItemProps = {
    product: ProductsProps
    addToCart: (product: ProductsProps) => void
}

export function CartItem({ product, addToCart }: CartItemProps) {
    const { cart, addQuantity, RemoveQuantity } = useCart()


    const isInCart = (id: number | string) => {
        return cart.find(item => (item.id === id))
    }

    return (
        <div className='flex w-[800px] p-2'>
            <div className='w-28'>
                <Image src={img}
                    quality={100}
                    width={100}
                    height={100}
                    alt='pizza'
                    className='w-full'
                />
            </div>
            <div className='pl-2 flex-1'>
                <h5 className='font-medium'>{product.name}</h5>
                <p className='text-zinc-500 italic font-mono'>{product.ingredients}</p>
                <div className='flex justify-between items-end w-full'>
                    <small>{ConvertCurrency.CurrencytoKwanza(product.price)}</small>
                    {
                        isInCart(product.id) ? (
                            <div className='flex items-center gap-3 justify-between'>
                                <div className='flex items-center gap-2'>
                                    <Button
                                        variant='primary'
                                        size='small'
                                        className='ml-auto'
                                        type='button'
                                        onClick={() => RemoveQuantity(product.id)}
                                    >
                                        -
                                    </Button>
                                    <span>{product.quantity}</span>
                                    <Button
                                        variant='primary'
                                        size='small'
                                        className='ml-auto'
                                        type='button'
                                        onClick={() => addQuantity(product.id)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <Button
                                    variant='primary'
                                    size='small'
                                    className='ml-auto'
                                    type='button'
                                    onClick={() => addToCart(product)}
                                >
                                    Apagar do carinho
                                </Button>
                            </div>
                        ) : (
                            <>
                                {
                                    product.quantity > 0 && (
                                        <Button
                                            variant='primary'
                                            size='small'
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
