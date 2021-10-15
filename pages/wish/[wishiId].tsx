import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import WishInfo from '@/components/WishInfo/WishInfo'
import WishItemWithContent from '@/components/WishItemWithContent'
import WishItemDefault from '@/components/WishItemDefault'
import { deepCopy } from '@/utils/deepCopy'

const WishDetail: NextPage = (): JSX.Element => {
  const [wishItems, setWishItems] = useState(
    Array.from({ length: 15 }, () => ({
      order: undefined,
      title: undefined,
      price: undefined,
      siteUrl: undefined,
      photoUrl: undefined,
      giverName: undefined,
    })),
  )
  const [wishMeta, setWishMeta] = useState({
    title: '',
    description: '',
    userImage: '',
  })

  useEffect(() => {
    const setWishData = async () => {
      const { meta, wishes } = await getWishDetail()

      const newWishes = deepCopy(wishItems)
      wishes.forEach((wish) => {
        newWishes[wish?.order - 1] = wish
      })

      setWishItems(newWishes)
      setWishMeta(meta)
    }

    setWishData()
  }, [])

  return (
    <S.Container>
      <WishInfo
        title={wishMeta.title}
        description={wishMeta.description}
        userImage={wishMeta.userImage}
      />

      <S.WishList>
        {wishItems.map(({ title, price, siteUrl, photoUrl, giverName, order }, index) => (
          <S.WishItem key={index}>
            {order === index + 1 && title && price && siteUrl ? (
              <WishItemWithContent
                title={title}
                price={price}
                siteUrl={siteUrl}
                photoUrl={photoUrl}
                giverName={giverName}
              />
            ) : (
              <WishItemDefault />
            )}
          </S.WishItem>
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
  `,
  WishItem: styled.div`
    min-height: 200px;
    border-radius: 30px;
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

interface WishBasket {
  meta: {
    title: string
    description: string
    userImage: string
  }
  wishes: Wish[]
}
interface Wish {
  order: number
  title: string
  price: number
  siteUrl: string
  photoUrl?: string
  giverName?: string
}

const getWishDetail = async (): Promise<WishBasket> => {
  const response = await fetch('http://localhost:3000/mock.json')
  return await response.json()
}

export default WishDetail
