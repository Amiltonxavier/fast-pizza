'use client'
import React, { type ChangeEvent, type FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation'
import { useUser } from '@/app/context/user'
import Link from 'next/link'


export function CreateUser() {
    const router = useRouter()
    const { user, registerUser } = useUser()
    const [name, setName] = useState('');

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        if (!name) return
        registerUser({ fullname: name })
        router.push('/menu')
    }
    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        event.preventDefault()
        setName(event.target.value)
    }

    return (
        <div className='flex flex-col items-center justify-center'>
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
                            type='submit'
                            variant='primary'
                            size='lg'
                        >
                            Pedir
                        </Button>
                    </form>
                )
            }

        </div>
    )
}
