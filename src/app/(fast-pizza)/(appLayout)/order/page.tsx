'use client'
import { OrderService } from '@/api/orders'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/input'
import { useCart } from '@/context/cart'
import { useUser } from '@/context/user'
import type { userTypes } from '@/types/user'
import { useRouter } from 'next/navigation'
import React, { type FormEvent } from 'react'

export default function Order() {
    const { user, updateUser } = useUser()
    const { cart, cleanCart } = useCart()
    const router = useRouter()
    const orderService = new OrderService()

    async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const phone = formData.get('phone' as string) as string | null ?? undefined
        const address = formData.get('address' as string) as string | null ?? undefined
        const email = formData.get('email' as string) as string | null ?? undefined
        const priority = formData.get('priority' as string)

        console.log(priority)

        updateUser({ address, phone, email } as userTypes)

        const result = cart.map(item => {
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        })

        try {
            const response = await orderService.post({
                product: [...result],
                priority: true,
                user: {
                    phone,
                    fullname: user?.fullname,
                    email,
                    address
                }
            });
            cleanCart();
            if (response?.id) {
                router.push(`/order/${response.id}`);
            } else {
                console.error('ID do pedido não encontrado na resposta.');
            }
        } catch (error) {
            console.error('Erro ao realizar o pedido:', error);
        }
    }

    return (
        <div className='space-y-5'>
            <h3 className='inline-flex gap-2 font-medium text-3xl font-mono'>Pronto para encomendar? Vamos! Nome próprio</h3>
            <form
                onSubmit={handleSubmitForm}
                className='grid grid-cols-3 gap-4 items-center space-y-5'
            >
                <label htmlFor="" className='font-mono text-xl'>Nome Completo</label>
                <div className='col-span-2'>
                    <Input
                        name='fullname'
                        defaultValue={user?.fullname}
                        className='w-full bg-white'
                        required
                    />
                </div>
                <label htmlFor="" className='font-mono text-xl'>Number de Telefone</label>
                <div className='col-span-2'>
                    <Input
                        name='phone'
                        type='tel'
                        className='w-full 
                    bg-white'
                        required
                    />
                </div>
                <label htmlFor="" className='font-mono text-xl'>E-mail</label>
                <div className='col-span-2'>
                    <Input
                        name='email'
                        type='email'
                        className='w-full bg-white'
                        required
                    />
                </div>
                <label htmlFor="" className='font-mono text-xl'>Endereço</label>
                <div className='col-span-2'>
                    <div className='bg-white flex rounded-full p-2 focus-within:ring-2 ring-offset-1'>
                        <input
                            name='address'
                            required
                            className='w-full outline-none bg-white ring-0 focus-within:ring-0'
                        />
                        <Button
                            variant='primary'
                            size='lg'
                        >
                            Pegar o seu endereço
                        </Button>
                    </div>

                </div>
                <input id="priority" type='checkbox' className='' />
                <div className='col-span-2'>
                    <label
                        htmlFor="priority"
                        className='font-mono text-xl'>Quer dar prioridade ao seu pedido?
                    </label>
                </div>

                <div className='block'>
                    <Button
                        variant='primary'
                        size='lg'
                        type='submit'
                    >
                        <span>peça agora</span>
                    </Button>
                </div>

            </form>
        </div>
    )
}
