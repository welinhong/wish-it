import { MouseEvent, ReactNode } from 'react'
import styled from 'styled-components'

export interface Props {
  children: ReactNode
  disabled?: boolean
  onClick: (e: MouseEvent<HTMLButtonElement>) => void
}

const Button = ({
  children,
  disabled = false,
  onClick,
}: Props): JSX.Element => {
  return (
    <StyledButton disabled={disabled} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

const StyledButton = styled.button`
  min-width: 250px;
  padding: 15px;
  border-radius: 40px;
  border: none;
  background-color: ${({ theme }) => theme.color.primary};
  font-weight: bold;
  align-self: flex-start;
  cursor: pointer;
  &:disabled {
    background-color: #ececec;
    color: #767676;
    cursor: not-allowed;
  }
`

export default Button
