'use client'
import { useUser } from '@/app/context/user'
import { useRouter } from 'next/navigation'
import React, { type ReactNode } from 'react'

type LayoutProps = {
    children: ReactNode
}


export default function layout({ children }: LayoutProps) {
    const { user } = useUser()
    const router = useRouter()
    if (!user) router.replace('/')
    return (
        <>
            {children}
        </>
    )
}