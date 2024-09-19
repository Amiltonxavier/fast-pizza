import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type variantProps = {
    default: string;
    outline: string;
    ghost: string;
    link: string;
    primary: string;
};

type sizeProps = {
    default: string;
    sm: string;
    xs: string;
    lg: string;
    icon: string;
};

const size: sizeProps = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    xs: 'h-8 px-2.5',
    lg: 'h-8 sm:h-11 rounded-md px-8 sm:px-5',
    icon: 'h-10 w-10',
};

type ButtonProps = ComponentProps<'button'> & {
    size?: keyof sizeProps;
    variant?: keyof variantProps;
}

const variant: variantProps = {
    default: 'bg-transparent text-zinc-700 hover:bg-transparent/40',
    outline:
        ' text-slate-600 border bg-transparent hover:text-blue-500 hover:border-blue-500 shadow-sm',
    ghost:
        'text-gray-400 hover:text-gray-700 bg-white px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto',
    link:
        'text-sky-700 underline-offset-4 hover:underline hover:opacity-70 duration-150',
    primary:
        'rounded-full bg-yellow-400 hover:bg-yellow-400/80 text-stone-700 focus-within:ring focus-within:ring-yellow-400 ring-offset-2'

}


const buttonVariants = (sizeKey: keyof sizeProps, variantKey: keyof variantProps) => {
    return twMerge(size[sizeKey], variant[variantKey]);
};

export function Button({ className, variant = 'default', size = 'default', ...props }: ButtonProps) {
    return (
        <button
            className={twMerge(
                'duration-100 font-bold font-mono flex justify-center items-center uppercase',
                buttonVariants(size, variant),
                className
            )}
            {...props}
        />
    )
}
