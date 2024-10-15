import { Toast, ToastProps } from "@gilla-design-system/react";
import { Meta, StoryObj } from "@storybook/react";

export default {
  title: 'Information/Toast',
  component: Toast,
  args: {
    title: 'Agendamento Realizado',
    description: 'Quarta-feira, 23 de Outubro às 16h'
  }
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}