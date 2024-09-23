import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type variantStatusProps = {
    success: string,
    default: string,
    priority: string,
}

type StatusProps = ComponentProps<'span'> & {
    status?: keyof variantStatusProps
}

const status: variantStatusProps = {
    success: 'bg-emerald-500',
    default: 'bg-zinc-300',
    priority: 'bg-rose-500'
}

function variantFn(statuskey: keyof variantStatusProps) {
    return twMerge(status[statuskey])
}

export function Status({ className, status = 'default', ...props }: StatusProps) {
    return (
        <span
            className={
                twMerge('text-stone-100 flex justify-center items-center rounded-full text-base sm:text-xl font-medium font-mono uppercase px-2 sm:px-4',
                    variantFn(status),
                    className
                )}
            {
            ...props
            }
        />
    )
}
