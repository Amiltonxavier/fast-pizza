'use client'
import React, { type ChangeEvent, type FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation'
import { useUser } from '@/context/user'
import Link from 'next/link'


export function CreateUser() {
    const router = useRouter()
    const { user, registerUser } = useUser()
    const [name, setName] = useState('');

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!name) return
        router.push('/menu')
        registerUser({ fullname: name })
    }
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setName(event.target.value)
    }

    return (
        <div className='flex flex-col items-center justify-center w-full'>
            {
                user ? (
                    <Link href="/menu">
                        <Button
                            variant='primary'
                            type='button'
                            size='lg'
                        >
                            Continuar o pedido, {user.fullname}
                        </Button>
                    </Link>
                ) : (
                    <form
                        onSubmit={handleSubmitForm}
                        className="space-y-8"

                    >
                        <Input
                            type="text"
                            placeholder="Seu Nome Completo"
                            onChange={handleChange}
                            className='bg-white'
                        />

                        <Button
                            className='w-full'
                            type='submit'
                            variant='primary'
                            size='lg'
                        >
                            Inície o seu pedido Pedir
                        </Button>
                    </form>
                )
            }

        </div>
    )
}
