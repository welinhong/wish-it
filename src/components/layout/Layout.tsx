import { ReactNode } from 'react'
import styled from 'styled-components'

interface Props {
  children: ReactNode
}
const Layout = ({ children }: Props): JSX.Element => {
  return <StyledContainer>{children}</StyledContainer>
}

const StyledContainer = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`

export default Layout
