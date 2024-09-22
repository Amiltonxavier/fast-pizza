import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type LabelProps = ComponentProps<'label'>

export function Label({className ,...props}: LabelProps) {
  return (
    <label  className={twMerge('font-mono text-xl', className)} {...props} />
  )
}
