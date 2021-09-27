import Header from '@/components/layout/Header'
import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props): JSX.Element => {
  return (
    <StyledContainer>
      <StyledHeaderContainer>
        <StyledContainerInner>
          <Header />
        </StyledContainerInner>
      </StyledHeaderContainer>

      <StyledContainerInner>{children}</StyledContainerInner>
    </StyledContainer>
  )
}

const StyledContainer = styled.div``
const StyledHeaderContainer = styled.div`
  border-bottom: 1px solid #c9c8d3;
`
const StyledContainerInner = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export default Layout
