'use client'
import { Button } from '@/app/components/ui/Button'
import { Input } from '@/app/components/ui/input'
import { useCart } from '@/app/context/cart'
import { useOrder } from '@/app/context/orders'
import { useUser } from '@/app/context/user'
import { Loader } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { type FormEvent } from 'react'

export default function Order() {
    const { user, updateUser } = useUser()
    const { cart, cleanCart } = useCart()
    const { registerOrder, orders } = useOrder()
    const router = useRouter()

    function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const phone = formData.get('phone' as string)
        const address = formData.get('address' as string)
        const email = formData.get('email' as string)


        updateUser({ address, phone, email })

        const result = cart.map(item => {
            return {
                name: item.name,
                price: item.price,
                quantity: item.quantity
            }
        })

        registerOrder({
            product: [...result],
            priority: true,
            user: {
                phone,
                fullname: user?.fullname,
                email,
                address
            }
        })


        cleanCart()


        router.push('/order/12345')


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
                    bg-white' required
                    />
                </div>
                <label htmlFor="" className='font-mono text-xl'>Number de Telefone</label>
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
                        <input name='address' className='w-full outline-none bg-white ring-0 focus-within:ring-0' />
                        <Button variant='primary' size='small'>
                            Pegar o seu endereço
                        </Button>
                    </div>

                </div>
                <input id="priority" type='checkbox' className='' />
                <div className='col-span-2'>
                    <label htmlFor="priority" className=''>Quer dar prioridade ao seu pedido?</label>
                </div>

                <div className='block'>
                    <Button variant='primary' type='submit'>
                        <span>peça agora</span>
                        <Loader />
                    </Button>
                </div>

            </form>
        </div>
    )
}
