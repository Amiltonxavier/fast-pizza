'use client'
import { useUser } from '@/context/user'
import React, { type ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type DisplayUsernameProps = ComponentProps<'p'>


export default function DisplayUsername({ className, ...props }: DisplayUsernameProps) {
  const { user } = useUser()

  return (
    <p
      className={twMerge('font-mono font-medium sm:font-semibold mx-auto uppercase text-wrap', className)}
      {...props}
    >
      {user?.fullname}
    </p>
  )
}
