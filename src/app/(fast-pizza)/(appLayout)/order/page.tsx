import { OrderForm } from '@/app/components/order-form/form-order'

export default function Order() {

    return (
        <div className='space-y-5 animate-fadeIn'>
            <h3 className='inline-flex gap-2 font-medium text-3xl font-mono'>Pronto para encomendar? Vamos! Nome próprio</h3>
            <OrderForm />
        </div>
    )
}
