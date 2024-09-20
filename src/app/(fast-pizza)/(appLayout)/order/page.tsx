'use client'
import { OrderService } from '@/api/orders'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/input'
import { useCart } from '@/context/cart'
import { useUser } from '@/context/user'
import type { userTypes } from '@/types/user'
import type { Metadata } from 'next'
import { useRouter } from 'next/navigation'
import React, { type FormEvent } from 'react'



export default function Order() {
    const { user, updateUser } = useUser()
    const { cart, cleanCart, getTotalPriceInCart } = useCart()
    const router = useRouter()
    const orderService = new OrderService()
    async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const phone = formData.get('phone' as string) as string | null ?? undefined
        const address = formData.get('address' as string) as string | null ?? undefined
        const email = formData.get('email' as string) as string | null ?? undefined
        const priority = formData.get('priority' as string) as string

        updateUser({ address, phone, email } as userTypes)

        const result = cart.map(item => {
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        })
        if (result.length <= 0) return

        try {
            const response = await orderService.post({
                product: [...result],
                priority: priority?.includes('on') as boolean,
                total: getTotalPriceInCart(),
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
                <div className='col-span-3 flex items-center gap-4'>
                    <input
                        id="c1-13"
                        type="checkbox"
                        name='priority'
                        className="size-7 appearance-none bg-white border border-gray-300 rounded-md checked:bg-yellow-400 checked:ring-2 checked:ring-yellow-400 ring-offset-2 transition-all cursor-pointer
                        disabled:bg-gray-100 disabled:cursor-not-allowed disabled:border-gray-200 disabled:checked:bg-gray-200 relative"
                    />
                    <label htmlFor="c1-13" className="font-mono text-xl font-medium cursor-pointer">
                        Quer dar prioridade ao seu pedido?
                    </label>
                </div>


                <div className='block'>
                    <Button
                        variant='primary'
                        size='lg'
                        type='submit'
                    >
                        pedir agora {getTotalPriceInCart()}
                    </Button>
                </div>

            </form>
        </div>
    )
}
