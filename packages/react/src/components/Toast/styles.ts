import { styled } from "../../styles";

export const ToastContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  width: 360,

  backgroundColor: '$gray800',
  padding: '$3 $5',

  border: '1px solid $gray600',
  borderRadius: 6,
  
  gap: 4
})

export const TitleContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
})

export const Title = styled('p', {
  fontFamily: '$default',
  color: '$white',
  fontSize: '$xl',
  fontWeight: '$bold',
  lineHeight: '$base',

  margin: 0
})

export const Description = styled('span', {
  fontFamily: '$default',
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',

  margin: 0
})

export const CloseButton = styled('button', {
  textDecoration: 'none',
  backgroundColor: 'transparent',
  border: 0,
  cursor: 'pointer'
})