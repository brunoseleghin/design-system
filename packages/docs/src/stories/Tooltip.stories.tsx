import type { StoryObj, Meta } from "@storybook/react"

import { Tooltip, TooltipProps } from "@gilla-design-system/react"

export default {
  title: 'Information/Tooltip',
  component: Tooltip,
  args: {
    children: '21 de Outubro - Indisponível'
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}