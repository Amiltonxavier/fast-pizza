'use client'
import { useUser } from '@/context/user'
import React from 'react'

export function DisplayUsername() {
  const { user } = useUser()
  if (!user) return
  return (
    <p
      className='font-mono font-semibold mx-auto uppercase text-xl'
    >
      {user.fullname}
    </p>
  )
}
