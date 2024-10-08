'use client'
import { useCart } from '@/context/cart'
import React from 'react'

export function TotalInCart() {
    const { getTotalPriceInCart, totalInCart } = useCart()
    return (
        <p className='space-x-4 inline-flex'>
            <span>{totalInCart}</span>
            <span>{getTotalPriceInCart()?.toLocaleString('pt-AO', {
                style: 'currency',
                currency: 'AOA'
            })}</span>
        </p>
    )
}
