import React, { ComponentProps, ReactNode } from 'react'

import { TooltipContainer, TooltipCard } from './styles'

export type TooltipProps = ComponentProps<typeof TooltipCard> & {
  children: ReactNode
}

export function Tooltip({children, ...props}: TooltipProps) {
  return (
    <TooltipContainer>
      <TooltipCard {...props}>
        {children}
      </TooltipCard>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'