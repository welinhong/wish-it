import { ReactNode, useEffect } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

// TODO: SSR 고려해서 업데이트하기 - mounted 상태에서만 portal을 사용한다 (여기서부터)
// Modal 컴포넌트에서 모달을 아예 생성하고 body에 넣는 것까지 담당하고 싶음
// 참고 https://github.com/vercel/next.js/tree/canary/examples/with-portals
// (추후) tabIndex 고려

const Modal = ({ isOpen, onClose, children }: Props): JSX.Element => {
  const el = document.createElement('div')

  const handleClickOverlay = () => {
    onClose()
  }

  useEffect(() => {
    document.body.appendChild(el)

    return () => {
      document.body.removeChild(el)
    }
  })

  if (!isOpen) return <></>

  return createPortal(
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
