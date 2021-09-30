import { ReactNode, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import styled from 'styled-components'

interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

// Modal 컴포넌트에서 모달을 아예 생성하고 body에 넣는 것까지 담당
// 참고 https://github.com/vercel/next.js/tree/canary/examples/with-portals
// (추후) tabIndex 고려

const Modal = ({ isOpen, onClose, children }: Props): JSX.Element => {
  const ref = useRef<HTMLDivElement>()
  const [mounted, setMounted] = useState(false)

  const handleClickOverlay = () => {
    onClose()
  }

  useEffect(() => {
    // 위에서 생성해둔 ref에 새로운 객체 할당
    ref.current = document.createElement('div')
    document.body.appendChild(ref.current)

    // mounted 셋팅
    setMounted(true)

    return () => {
      ref.current && document.body.removeChild(ref.current)
    }
  }, [])

  if (!isOpen) return <></>

  console.log('welin', mounted && ref.current)

  return mounted && ref.current ? (
    createPortal(
      <StyledModalContainer onClick={handleClickOverlay}>
        <StyledModalContent>{children}</StyledModalContent>
      </StyledModalContainer>,
      ref.current,
    )
  ) : (
    <></>
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
