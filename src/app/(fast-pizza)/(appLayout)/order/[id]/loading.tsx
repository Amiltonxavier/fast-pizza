import { Skeleton } from '@/app/components/ui/skeleton'
import React from 'react'

export default function loading() {
    return (
        <div className="space-y-8 w-full">
            <div className="flex justify-between w-full">
                <h3 className="inline-flex gap-2 font-medium text-xl sm:text-3xl font-mono">Estado do pedido #<Skeleton className='h-9 w-36' /></h3>
                <Skeleton className='h-9 w-72' />
            </div>
            <div className="px-6 py-5 bg-stone-200 sm:flex justify-between">
                <Skeleton className='h-5 w-72' />
                <Skeleton className='h-5 w-72' />
            </div>
            <ul className='flex flex-col gap-6'>
                {/*  {
                    Array.from({length: 4}).map(item => (
                        <S />
                    ))
                } */}

            </ul>
            <div className="px-6 py-5 bg-stone-200 space-y-5 font-mono">
                <div className="text-base font-bold inline-flex items-center gap-2">
                    <span>Preço da Pizza: </span>
                    <Skeleton className='h-5 w-28' />
                </div>
                <p className="font-bold text-xl font-mono">
                    Total a pagar na entrega: <Skeleton className='h-4 w-56' />
                </p>
            </div>
        </div>
    )
}
