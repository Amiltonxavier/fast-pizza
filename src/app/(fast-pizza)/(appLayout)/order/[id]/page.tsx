'use client'

import { ListProduct } from "@/app/components/ui/list-product"
import { useCart } from "@/app/context/cart"
import { useOrder } from "@/app/context/orders"
import { ConvertCurrency } from "@/utils/currency"

type OrderFinallyProps = {
    params: {
        id: string
    }
}


export default function OrderFinally({ params }: OrderFinallyProps) {
    const { getTotalPriceInCart } = useCart();

    const { registerOrder, orders } = useOrder()
    return (
        <div className="space-y-8 w-full">
            <div className="flex justify-between">
                <h3 className="inline-flex gap-2 font-medium text-3xl font-mono">Estado do pedido #{params.id}</h3>
                <div className="bg-emerald-500 rounded-full text-xl font-medium font-mono uppercase flex items-center justify-center text-white px-4">
                    <span>Em preparo</span>
                </div>
            </div>
            <div className="px-6 py-5 bg-stone-200 flex justify-between">
                <h3 className="text-2xl">Restam apenas 34 minutos 😃</h3>
                <p className="text-sm font-mono self-end">
                    38 / 5.000
                    (Entrega estimada: 18 de setembro, 15h37)
                </p>
            </div>
            <div>
                <ul className="flex flex-col gap-5">
                    <ul className='flex flex-col gap-6'>
                        {
                            orders?.product.map(order => (
                                <ListProduct
                                    key={orders.orderId}
                                    item={order}

                                />
                            ))

                        }

                    </ul>
                </ul>
            </div>
            <div className="px-6 py-5 bg-stone-200 space-y-5 font-mono">
                <p className="text-base font-bold">Preço da Pizza: <span>{ConvertCurrency.CurrencytoKwanza(getTotalPriceInCart())}</span>
                </p>
                <p className="font-bold text-xl font-mono">
                    Total a pagar na entrega:
                </p>
            </div>
        </div>
    )
}
