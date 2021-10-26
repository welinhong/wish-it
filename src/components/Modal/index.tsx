import ClientOnlyPortal from '@/components/ClientOnlyPortal/ClientOnlyPortal'
import { ReactNode, MouseEventHandler } from 'react'
import styled from 'styled-components'

export interface Props {
  isOpen: boolean
  width?: string
  onClose: () => void
  children: ReactNode
  className?: string
}

// (추후) tabIndex 고려
const Modal = ({
  isOpen,
  width,
  onClose,
  children,
  className,
}: Props): JSX.Element => {
  const handleEventPropagation: MouseEventHandler<Element> = (e) => {
    e.stopPropagation()
  }

  return isOpen ? (
    <ClientOnlyPortal selector="#modal">
      <S.ModalContainer onClick={onClose}>
        <S.ModalContent
          style={{ width: width || '80%' }}
          onClick={handleEventPropagation}
          className={className}
        >
          <S.Close onClick={onClose}>✕</S.Close>
          {children}
        </S.ModalContent>
      </S.ModalContainer>
    </ClientOnlyPortal>
  ) : (
    <></>
  )
}

export default Modal

const S = {
  ModalContainer: styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ModalContent: styled.div`
    position: relative;
    min-width: 300px;
    max-width: 80%;
    min-height: 300px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 30px;
  `,
  Close: styled.button`
    position: absolute;
    right: 30px;
    top: 30px;
    border: none;
    background: none;
    font-size: 30px;
    cursor: pointer;
  `,
}
