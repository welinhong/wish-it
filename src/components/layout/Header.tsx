import styled from 'styled-components'
export interface Props {
  className?: string
}

const Header = ({ className }: Props): JSX.Element => {
  return (
    <StyledContainer className={className}>
      <StyledLogo>Wish it</StyledLogo>

      {/* 사용자 닉네임 출력 */}
      <StyledUserInfo>Welin</StyledUserInfo>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
`
const StyledLogo = styled.div`
  font-weight: bold;
`
const StyledUserInfo = styled.div`
  background-color: greenyellow;
`

export default Header
