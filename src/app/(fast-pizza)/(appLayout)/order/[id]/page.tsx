import { OrderService } from "@/api/orders"
import { ListProduct } from "@/app/components/ui/list-product"
import { Status } from "@/app/components/ui/status"
import type { ProductsProps } from "@/types/Cart"
import { ConvertCurrency } from "@/utils/currency"
import type { Metadata } from "next"


type OrderFinallyProps = {
    params: {
        id: string
    }
}

export async function generateMetadata({ params }: OrderFinallyProps): Promise<Metadata> {
    const orderService = new OrderService()
    const order = await orderService.getById(params.id)
    return {
        title: order.id as string
    }

}

export default async function OrderFinally({ params }: OrderFinallyProps) {
    const orderService = new OrderService()
    const orders = await orderService.getById(params.id)

    return (
        <div className="animate-fadeIn space-y-8 w-full">
            <div className="flex justify-between items-end">
                <h3 className="inline-flex gap-2 font-medium text-xl sm:text-3xl font-mono">Estado do pedido #{params.id}</h3>
                <div className="flex gap-4 items-center">
                    {
                        orders.priority &&
                        <Status status="priority">
                            Urgente
                        </Status>
                    }
                    <Status status="success">
                        Em preparo
                    </Status>
                </div>
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
                        {ConvertCurrency.CurrencytoKwanza(orders.total)}
                    </span>
                </p>
                <p className="font-bold text-xl font-mono">
                    Total a pagar na entrega:  {ConvertCurrency.CurrencytoKwanza(orders.total)}
                </p>
            </div>
        </div>
    )
}
