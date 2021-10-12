import Image from 'next/image'
import styled from 'styled-components'

export interface Props {
  title: string
  description: string
  userImage?: string
}

const WishInfo = (props: Props): JSX.Element => {
  const { title, description, userImage } = props

  return (
    <StyledContainer>
      <StyledUserImage>{userImage && <Image src={userImage} alt="User Image" />}</StyledUserImage>

      <StyledMeta>
        <span>{title}</span>
        <p>{description}</p>
      </StyledMeta>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
`
const StyledUserImage = styled.div`
  width: 98px;
  height: 98px;
  border-radius: 50%;
  background-color: lightgrey;
  img {
    width: 100%;
    height: 100%;
  }
`
const StyledMeta = styled.div`
  flex: 1;
  margin-left: 40px;
`

export default WishInfo