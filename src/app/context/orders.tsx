'use client'
import type { OrderTypes } from '@/types/order'
import React, { createContext, type ReactNode, useContext, useState } from 'react'
import { v4 as uuid } from 'uuid'


type OrderContextProps = {
    orders: OrderTypes | undefined,
    registerOrder: (order: OrderTypes) => void
}

type OrdersContextProvinderProps = {
    children: ReactNode
}

export const OrderContext = createContext({} as OrderContextProps)

export function OrdersContextProvinder({ children }: OrdersContextProvinderProps) {
    const [orders, setOrders] = useState<OrderTypes>();

    function registerOrder(order: Omit<OrderTypes, 'orderId'>) {

        const newOrder = {
            ...order,
            orderId: uuid()
        }

        setOrders(newOrder)
    }

    console.log(orders)
    return (
        <OrderContext.Provider value={{ orders, registerOrder }}>
            {children}
        </OrderContext.Provider>
    )
}


export const useOrder = () => useContext(OrderContext)
