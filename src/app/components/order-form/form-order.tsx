'use client'
import React, { type MouseEvent, type FormEvent, useState } from 'react'
import { Input } from '../ui/input'
import { useCart } from '@/context/cart'
import { useUser } from '@/context/user'
import type { userTypes } from '@/types/user'
import { Button } from '../ui/Button'
import { OrderService } from '@/api/orders'
import { useRouter } from 'next/navigation'
import { GeoServices } from '@/api/location'
import { useMutation, useQuery } from '@tanstack/react-query'
import type { GeoTypes } from '@/types/geo'
import { LoaderCircle } from 'lucide-react'



export function OrderForm() {

    const { user, updateUser } = useUser()
    const { cart, cleanCart, getTotalPriceInCart } = useCart();
    const [coordinates, setCoordinates] = useState<GeoTypes | null>(null);
    const router = useRouter()
    const orderService = new OrderService();
    const geoService = new GeoServices();


    async function getGeo({ latitude, longitude }: GeoTypes) {
        const result = await geoService.getLocation({ latitude, longitude })
        return result
    }
    const { isLoading: LoandingCoordinates, data } = useQuery({
        queryKey: ['location', coordinates],
        queryFn: () => getGeo(coordinates as GeoTypes),
        enabled: !!coordinates
    })

    async function handlegetGeoLocation(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault()
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(async (position) => {
                const { coords: { latitude, longitude } } = position;
                setCoordinates({ latitude, longitude });
            })
        }

    }

    const { isPending } = useMutation({
        mutationKey: ['create-order'],
        mutationFn: handleSubmitForm
    })

    async function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const data = Object.fromEntries(formData)
        updateUser(data as userTypes)

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
                priority: data.priority === 'on',
                total: data.priority === 'on' ? getTotalPriceInCart() + 0.2 : getTotalPriceInCart(),
                user: {
                    ...data,
                    fullname: user?.fullname
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
        <form
            onSubmit={handleSubmitForm}
            className='grid sm:grid-cols-3 gap-4 items-center space-y-5'
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
            <label htmlFor="" className='font-mono text-xl block'>Number de Telefone</label>
            <div className='col-span-2'>
                <Input
                    name='phone'
                    type='tel'
                    className='w-full bg-white'
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
                <div className='bg-white flex h-11 rounded-full p-2 focus-within:ring-2 ring-offset-2 ring-yellow-400 border'>
                    <Input
                        name='address'
                        required
                        type='text'
                        className='w-full outline-none border-none ring-0 focus-visible:ring-0 bg-transparent ring-offset-0'
                        defaultValue={data ? `${data.continent}, ${data.countryName}, ${data.principalSubdivision}, ${data.locality}` : ''}
                    />
                    {
                        !data && (
                            <Button
                                variant='primary'
                                size='sm'
                                type='button'
                                className='sm:w-[300px]'
                                onClick={handlegetGeoLocation}
                                disabled={LoandingCoordinates}
                            >
                                {
                                    LoandingCoordinates ?
                                        <LoaderCircle className='animate-spin size-5' /> :
                                        'Pegar o seu endereço'
                                }

                            </Button>
                        )
                    }
                </div>

            </div>
            <div className='col-span-3 flex items-center gap-4'>
                <input
                    id="c1-13"
                    type="checkbox"
                    name='priority'
                    className="h-6 w-6 accent-yellow-400 checked:ring ring-yellow-400 ring-offset-2 rounded-md"
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

                    {
                        isPending ?
                            <LoaderCircle className='animate-spin size-5' /> :
                            `pedir agora ${getTotalPriceInCart()}`
                    }

                </Button>
            </div>

        </form>
    )
}
