import { styled } from "../../styles";

export const TooltipContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
})

export const TooltipCard = styled('span', {
  position: 'relative',
  padding: '$3 $4',
  backgroundColor: '$gray900',
  
  fontFamily: '$inter',
  fontSize: '$sm',
  color: '$gray100',
  
  borderRadius: 5,

  '&::after': {
    content: "",
    width: 16,
    height: 16,
    display: 'block',
    position: 'absolute',
    backgroundColor: '$gray900',
    transform: 'rotate(45deg)',
    left: 'calc(50% - 8px)',
    zIndex: -1
  }
})