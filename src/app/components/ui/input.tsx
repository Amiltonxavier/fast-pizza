'use client'

import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export function Input({className, ...props}: InputProps) {
    return (
        <div className="border rounded-full max-w-72 bg-white focus-within:ring ring-offset-2 focus-within:ring-yellow-400">
            <input 
                className={twMerge('w-full outline-none bg-transparent h-full py-3 px-4', className)}
                {...props}
            />
        </div>
    )
}
