import ClientOnlyPortal from '@/components/ClientOnlyPortal/ClientOnlyPortal'
import { ReactNode, MouseEventHandler } from 'react'
import styled from 'styled-components'

export interface Props {
  isOpen: boolean
  onClose: () => void
  children: ReactNode
}

// (추후) tabIndex 고려
const Modal = (props: Props): JSX.Element => {
  const { isOpen, onClose, children } = props

  const handleEventPropagation: MouseEventHandler<Element> = (e) => {
    e.stopPropagation()
  }

  return isOpen ? (
    <ClientOnlyPortal selector="#modal">
      <S.ModalContainer onClick={onClose}>
        <S.ModalContent onClick={handleEventPropagation}>{children}</S.ModalContent>
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
    min-width: 300px;
    min-height: 300px;
    background-color: #ffffff;
    border-radius: 8px;
    padding: 20px;
  `,
}
