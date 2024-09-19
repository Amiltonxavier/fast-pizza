'use client'
import { OrderService } from "@/api/orders"
import { ListProduct } from "@/app/components/ui/list-product"
import { useCart } from "@/app/context/cart"
import type { ProductsProps } from "@/types/Cart"
import { OrderTypes } from "@/types/order"
import { ConvertCurrency } from "@/utils/currency"
import { useEffect, useState } from "react"

type OrderFinallyProps = {
    params: {
        id: string
    }
}


export default function OrderFinally({ params }: OrderFinallyProps) {
    const [orders, setOrder] = useState<OrderTypes>()

    const orderService = new OrderService()
    const getOrderById = async () => {
        const response = await orderService.getById(params.id);
        setOrder(response)
    }


    useEffect(() => {
        getOrderById()
    }, [])

    if (!orders) return

    return (
        <div className="space-y-8 w-full">
            <div className="flex justify-between w-full">
                <h3 className="inline-flex gap-2 font-medium text-xl sm:text-3xl font-mono">Estado do pedido #{params.id}</h3>
                <span
                    className="flex justify-end items-end bg-emerald-500 rounded-full text-base sm:text-xl mx-auto font-medium font-mono uppercase text-white px-1 sm:px-4">
                    Em preparo
                </span>
            </div>
            <div className="px-6 py-5 bg-stone-200 sm:flex justify-between">
                <h3 className="text-2xl">Restam apenas 34 minutos 😃</h3>
                <p className="text-sm font-mono self-end">
                    38 / 5.000
                    (Entrega estimada: 18 de setembro, 15h37)
                </p>
            </div>
            <ul className='flex flex-col gap-6'>
                {
                    orders?.product.map(item => (
                        <ListProduct
                            key={orders.id}
                            item={item as ProductsProps}
                        />
                    ))
                }

            </ul>
            <div className="px-6 py-5 bg-stone-200 space-y-5 font-mono">
                <p className="text-base font-bold">Preço da Pizza:
                    <span>
                        {ConvertCurrency.CurrencytoKwanza(orders.product.reduce((acc, current) => {
                            return acc + current.quantity * current.price
                        }, 0))}
                    </span>
                </p>
                <p className="font-bold text-xl font-mono">
                    Total a pagar na entrega:
                </p>
            </div>
        </div>
    )
}
