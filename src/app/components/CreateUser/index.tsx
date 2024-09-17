'use client'
import React, { ButtonHTMLAttributes, ChangeEvent, FormEvent, MouseEvent, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/Button'
import { useRouter } from 'next/navigation'
import { useUser } from '@/app/context/user'


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
        <form onSubmit={handleSubmitForm} className="space-y-8 mx-auto">
            <Input
                type="text"
                placeholder="Seu Nome Completo"
                onChange={handleChange}
            />
            {
                (
                    <Button type='submit' variant='primary'>
                        Pedir
                    </Button>
                )
            }

        </form>
    )
}
