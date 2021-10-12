import styled from 'styled-components'
import WishInfo from '@/components/WishInfo/WishInfo'

const wishInfo = {
  title: "Sun's Wishes",
  description:
    '안녕하세요. 이번 10월 1일 이사를 하게 되면서 갖고 싶은 목록을 정리해봤습니다. 사주세요!',
  userImage: '',
}

const WishDetail = (): JSX.Element => {
  const wishes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <S.Container>
      <WishInfo
        title={wishInfo?.title}
        description={wishInfo?.description}
        userImage={wishInfo?.userImage}
      />

      <S.WishList>
        {wishes.map((wish) => (
          <S.WishItem key={wish}>{wish}</S.WishItem>
        ))}
      </S.WishList>
    </S.Container>
  )
}

const S = {
  Container: styled.div`
    padding: 40px 20px;
  `,
  WishList: styled.div`
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(11, 1fr);
    gap: 20px;
    padding: 40px 0;
    background-color: lightyellow;
  `,
  WishItem: styled.div`
    background-color: lightblue;
    &:nth-of-type(1) {
      grid-column: 1/4;
      grid-row: 1/3;
    }
    &:nth-of-type(2) {
      grid-column: 4/7;
      grid-row: 1/3;
    }
    &:nth-of-type(3) {
      grid-column: 7/9;
      grid-row: 1/3;
    }
    &:nth-of-type(4) {
      grid-column: 9/11;
      grid-row: 1/3;
    }
    &:nth-of-type(5) {
      grid-column: 11/13;
      grid-row: 1/3;
    }
    &:nth-of-type(6) {
      grid-column: 1/4;
      grid-row: 3/5;
    }
    &:nth-of-type(7) {
      grid-column: 4/11;
      grid-row: 3/7;
    }
    &:nth-of-type(8) {
      grid-column: 11/13;
      grid-row: 3/5;
    }
    &:nth-of-type(9) {
      grid-column: 1/4;
      grid-row: 5/7;
    }
    &:nth-of-type(10) {
      grid-column: 11/13;
      grid-row: 5/7;
    }
    &:nth-of-type(11) {
      grid-column: 1/4;
      grid-row: 7/11;
    }
    &:nth-of-type(12) {
      grid-column: 4/7;
      grid-row: 7/11;
    }
    &:nth-of-type(13) {
      grid-column: 7/11;
      grid-row: 7/11;
    }
    &:nth-of-type(14) {
      grid-column: 11/13;
      grid-row: 7/9;
    }
    &:nth-of-type(15) {
      grid-column: 11/13;
      grid-row: 9/11;
    }
  `,
}

export default WishDetail
