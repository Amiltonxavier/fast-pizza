'use client'

import { Button } from '@/app/components/ui/Button'
import { DisplayUsername } from '@/app/components/ui/display-username'
import { ListProduct } from '@/app/components/ui/list-product'
import { useCart } from '@/context/cart'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CartPage() {
    const { cart, cleanCart, totalInCart } = useCart()

    return (
        <div className=''>
            <div className='space-y-5'>
                <Link href="/menu" className='flex items-center gap-2 font-mono text-blue-600 hover:underline tracking-widest text-sm'><ArrowLeft className='size-3' /> Voltar para o menu</Link>
                {
                    totalInCart <= 0 ? <span className='block font-mono font-semibold text-xl'>'Seu carrinho ainda está vazio. Comece a adicionar algumas pizzas :)</span> : (
                        <>
                            <div>
                                <h3 className='inline-flex gap-2 font-medium text-3xl'>Seu Carrinho, {/* <DisplayUsername /> */}</h3>
                            </div>
                            <ul className='flex flex-col gap-6'>
                                {
                                    cart.map(item => (
                                        <ListProduct
                                            key={item.id}
                                            item={item}
                                            enableControleButton
                                        />
                                    ))
                                }

                            </ul>
                            <div className='flex gap-2 items-center w-[400px]'>
                                <Link href="/order" className='w-full block'>
                                    <Button
                                        variant='primary'
                                        size='lg'
                                    >
                                        PEÇA PIZZA
                                    </Button>
                                </Link>
                                <Button
                                    variant='outline'
                                    type='button'
                                    onClick={cleanCart}
                                    size='lg'
                                >
                                    Limpar carrinho
                                </Button>
                            </div>
                        </>
                    )
                }

            </div>
        </div>
    )
}
