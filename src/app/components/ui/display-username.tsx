'use client'
import { useUser } from '@/app/context/user'
import React from 'react'

export  function DisplayUsername() {
    const { user } = useUser()
  return (
    <p className='font-mono font-semibold mx-auto'>{user?.fullname}</p>
  )
}
