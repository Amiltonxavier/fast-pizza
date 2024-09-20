import { Skeleton } from '@/app/components/ui/skeleton'
import React from 'react'

export default function Loading() {
    return (
        <div className='flex flex-col gap-4 border-b mt-2 w-full'>
            {
                Array.from({ length: 8 }).map((_, index) => {
                    return (
                        <div key={index} className='flex gap-2'>
                            <div className='size-32 overflow-hidden'>
                                <Skeleton className='w-full h-full rounded-lg' />
                            </div>

                            <div className='flex flex-col gap-0.5 w-full'>
                                <h5 className='font-medium'>
                                    <Skeleton className='h-6 w-24' />
                                </h5>
                                <p className=' text-zinc-500 italic font-mono text-base capitalize'>
                                    <Skeleton className='h-5 w-80' />
                                </p>
                                <div className='mt-auto flex justify-between items-end'>
                                    <p className='text-sm'>
                                        <Skeleton className='mr-auto h-5 w-24' />
                                    </p>
                                    <Skeleton className='h-6 sm:h-11 w-40' />
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
