import { ReactNode, useEffect } from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}

const Modal = ({ children }: Props): JSX.Element => {
  const el = document.createElement('div')

  const handleClickOverlay = () => {
    return false
  }

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  })

  return ReactDOM.createPortal(
    <StyledModalContainer onClick={handleClickOverlay}>
      <StyledModalContent>{children}</StyledModalContent>
    </StyledModalContainer>,
    el,
  )
}

export default Modal

const StyledModalContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StyledModalContent = styled.div`
  min-width: 300px;
  min-height: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  padding: 20px;
`
