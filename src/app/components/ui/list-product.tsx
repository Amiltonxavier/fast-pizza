import type { ProductsProps } from '@/types/Cart'
import { ConvertCurrency } from '@/utils/currency'
import React from 'react'
import { ControlesButtons } from './controlesButtons'

type ListProductProps = {
    item: ProductsProps,
    enableControleButton?: boolean
}


export function ListProduct({ item, enableControleButton = false }: ListProductProps) {
    return (
        <li key={item.id} className='w-full border-b pb-2 flex flex-wrap items-center self-center my-auto justify-between'>
            <div className='flex-1 ml-auto flex flex-col gap-2 font-medium font-mono'>
                <div className='flex gap-2 items-center '>
                    <p className='font-semibold'>{item.quantity}x</p>
                    <p>{item.name}</p>
                </div>
                {
                    !enableControleButton &&
                    <div className='italic'>
                        <p>{item.ingredients}</p>
                    </div>
                }

            </div>
            <div className='sm:flex items-center gap-2'>
                <p className='font-mono font-semibold text-xl'>{ConvertCurrency.CurrencytoKwanza(item.price * item.quantity)}</p>
                {
                    enableControleButton && <ControlesButtons id={item.id} />
                }

            </div>

        </li>
    )
}
