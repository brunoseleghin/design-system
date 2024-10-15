import React, { ComponentProps } from "react"
import { Description, TitleContainer, Title, ToastContainer, CloseButton } from "./styles"
import { X } from "phosphor-react"

export type ToastProps = ComponentProps<typeof ToastContainer> & {
  title: string,
  description: string
}

export function Toast(props: ToastProps) {
  return (
    <ToastContainer {...props}>
      <TitleContainer>
        <Title>{props.title}</Title>

        <CloseButton>
          <X color="#A9A9B2" size={20} />
        </CloseButton>
      </TitleContainer>

      <Description>{props.description}</Description>
    </ToastContainer>
  )
}