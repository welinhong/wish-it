import styled from 'styled-components'
import WishInfo from '@/components/WishInfo/WishInfo'
import WishItem from '@/components/WishItem/WishItem'

const wishInfo = {
  title: "Sun's Wishes",
  description:
    '안녕하세요. 이번 10월 1일 이사를 하게 되면서 갖고 싶은 목록을 정리해봤습니다. 사주세요!',
  userImage: '',
}

const WishDetail = (): JSX.Element => {
  return (
    <StyledContainer>
      <WishInfo
        title={wishInfo?.title}
        description={wishInfo?.description}
        userImage={wishInfo?.userImage}
      />

      <StyledWishList>
        <WishItem />
      </StyledWishList>
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  padding: 40px 20px;
`
const StyledWishList = styled.div`
  padding: 40px 0;
`

export default WishDetail
