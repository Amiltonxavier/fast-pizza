'use client'

import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export function Input({ className, ...props }: InputProps) {
    return (

        <input
            className={twMerge('w-full text-left border focus-visible:border-transparent rounded-full focus-visible:ring ring-offset-2 focus-visible:ring-yellow-500 outline-none bg-transparent h-full py-3 px-4', className)}
            {...props}
        />

    )
}
