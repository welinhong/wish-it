import { memo } from 'react'
import styled from 'styled-components'

interface Props {
  onClick: () => void
}
const WishItemDefault = (props: Props): JSX.Element => {
  const { onClick } = props

  return (
    <SContainer onClick={onClick}>
      <SPlusCircle>+</SPlusCircle>
    </SContainer>
  )
}

const SPlusCircle = styled.div`
  display: none;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  font-size: 30px;
  font-weight: 500;
  border-radius: 50%;
  background-color: #aafb4e;
`
const SContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: #f2f4f6;
  cursor: pointer;
  &:hover {
    ${SPlusCircle} {
      display: inline-flex;
    }
  }
`

export default memo(WishItemDefault)
