'use client'
import { useUser } from '@/context/user'
import React, { Suspense, useEffect, useState } from 'react'

export function DisplayUsername() {
  const { user } = useUser()
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient || !user) return null
  return (
    <p
      className='hidden sm:block font-mono font-medium sm:font-semibold mx-auto uppercase sm:text-xl text-lg text-wrap'
    >
      {user.fullname}
    </p>
  )
}
