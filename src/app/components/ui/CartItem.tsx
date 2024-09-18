'use client'

import React from 'react'
import { Button } from './Button'
import Image from 'next/image'
import img from '../../assets/pizza-1.jpg'
import type { ProductsProps } from '@/types/Cart'
import { ConvertCurrency } from '@/utils/currency'
import { useCart } from '@/app/context/cart'
import { Plus } from 'lucide-react'
import { ControlesButtons } from './controlesButtons'

type CartItemProps = {
    product: ProductsProps
    addToCart: (product: ProductsProps) => void
}

export function CartItem({ product, addToCart }: CartItemProps) {
    const { cart, addQuantity, RemoveQuantity, getTotalQuantityInCart, removerProduct } = useCart()


    const isInCart = (id: number | string) => {
        return cart.find(item => (item.id === id))
    }

    return (
        <div className='flex w-[800px] p-2'>
            <div className='w-28'>
                <Image
                    src={product.img}
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
                    <small className='text-sm'>{ConvertCurrency.CurrencytoKwanza(product.price)}</small>
                    {
                        isInCart(product.id) ? (
                            <ControlesButtons id={product.id} />
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
