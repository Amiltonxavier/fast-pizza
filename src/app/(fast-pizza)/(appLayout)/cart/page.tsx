'use client'

import { Button } from '@/app/components/ui/Button'
import { ControlesButtons } from '@/app/components/ui/controlesButtons'
import { DisplayUsername } from '@/app/components/ui/display-username'
import { ListProduct } from '@/app/components/ui/list-product'
import { useCart } from '@/app/context/cart'
import { ConvertCurrency } from '@/utils/currency'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function CartPage() {
    const { cart, cleanCart } = useCart()
    return (
        <div className=''>
            <div className='space-y-5'>
                <Link href="/menu" className='flex items-center gap-2 font-mono text-blue-600 hover:underline tracking-widest text-sm'><ArrowLeft className='size-3' /> Voltar para o menu</Link>
                {
                    cart.length <= 0 ? <span className='block font-mono font-semibold text-xl'>'Seu carrinho ainda está vazio. Comece a adicionar algumas pizzas :)</span> : (
                        <>
                            <div >
                                <h3 className='inline-flex gap-2 font-medium text-3xl'>Seu Carrinho, <DisplayUsername /></h3>
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
                                    <Button variant='primary'>
                                        PEÇA PIZZA
                                    </Button>
                                </Link>
                                <Button
                                    variant='secondary'
                                    type='button'
                                    onClick={cleanCart}

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
