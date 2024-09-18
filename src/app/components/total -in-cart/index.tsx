'use client'
import { useCart } from '@/app/context/cart'
import React from 'react'

export function TotalInCart() {
    const { cart, getTotalPriceInCart, getTotalInCart } = useCart()
    return (
        <p className='space-x-4'>
            <span>{getTotalInCart()}</span>
            <span>{getTotalPriceInCart()?.toLocaleString('pt-AO', {
                style: 'currency',
                currency: 'AOA'
            })}</span>
        </p>
    )
}
