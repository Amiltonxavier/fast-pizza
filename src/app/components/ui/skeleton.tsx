import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type SkeletonProps = ComponentProps<'div'>

export function Skeleton({ className, ...props }: SkeletonProps) {
    return (
        <div className={twMerge('animate-pulse bg-zinc-300 rounded-full', className)} {...props} />
    )
}
