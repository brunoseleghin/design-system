import type { StoryObj, Meta } from "@storybook/react"

import { Text, TextProps } from "@gilla-design-system/react"

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos eius quos ad veniam veritatis culpa quas totam, laboriosam beatae vero doloremque voluptatibus? Soluta eum minus reiciendis quo fuga, facilis distinctio.',
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: 'inline-radio',
    },
  }
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong Text',
    as: 'strong'
  }
}