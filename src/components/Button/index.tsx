import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

export interface Props {
  children: ReactNode
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children, onClick }: Props): JSX.Element => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

const StyledButton = styled.button`
  min-width: 250px;
  padding: 15px;
  border-radius: 40px;
  border: none;
  color: #767676;
  font-weight: bold;
  align-self: flex-start;
  cursor: pointer;
`

export default Button
