import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type ButtonProps = ComponentProps<'button'> & {
    variant?: 'primary' | 'secondary' | 'danger', // Definindo variantes possíveis
    size?: 'small' | 'medium' | 'large' // Definindo tamanhos possíveis
}

function getVariantClasses(variant: string) {
    switch (variant) {
        case 'primary':
            return 'bg-yellow-400 ';
        case 'secondary':
            return 'bg-gray-500';
        case 'danger':
            return 'bg-red-500';
        default:
            return 'bg-gray-200';
    }
}

function getSizeClasses(size: string) {
    switch (size) {
        case 'small':
            return 'py-2 px-3 text-xs';
        case 'medium':
            return 'py-3 px-6 text-base';
        case 'large':
            return 'py-4 px-8 text-lg';
        default:
            return 'py-3 px-6 text-base w-full';
    }
}

export function Button({ className, variant, size, ...props }: ButtonProps) {
    

    return (
        <button
            className={twMerge(
                'hover:bg-yellow-400/80 duration-100 rounded-full font-bold font-mono flex justify-center items-center uppercase text-black/70',
                getVariantClasses(variant!),
                getSizeClasses(size!),
                className
            )}
            {...props}
        />
    )
}
