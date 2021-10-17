import { ReactNode } from 'react'
import styled, { css } from 'styled-components'
import { TypographySet } from '@/components/designTokens/typography'
import { ColorSet } from '@/components/designTokens/color'

export interface Props {
  type: keyof TypographySet
  children: ReactNode
  as?: keyof JSX.IntrinsicElements
  color?: keyof ColorSet
  ellipsis?: boolean
  marginBottom?: string
}

const Typography = (props: Props): JSX.Element => {
  const { type, color, as = 'span', marginBottom, ellipsis, children } = props

  return (
    <StyledContainer
      marginBottom={marginBottom}
      type={type}
      color={color}
      ellipsis={ellipsis}
      as={as}
    >
      {children}
    </StyledContainer>
  )
}

// https://medium.com/swlh/creating-react-styled-components-with-dynamic-tags-and-props-ef965c839e64
const StyledContainer = styled.span<Props>`
  margin: 0;

  ${({ type, theme }) => {
    return theme.typography[type]
  }}
  ${({ color, theme }) => {
    return color && `color: ${theme.color[color]};`
  }}
  ${({ marginBottom }) => marginBottom && `margin-bottom: ${marginBottom};`}
  ${({ ellipsis }) =>
    ellipsis &&
    css`
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    `}
`

export default Typography
