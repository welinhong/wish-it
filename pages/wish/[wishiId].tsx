import { NextPage } from 'next'
import { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import WishInfo from '@/components/WishInfo/WishInfo'
import WishItemWithContent from '@/components/WishItemWithContent'
import WishItemDefault from '@/components/WishItemDefault'
import WishModal from '@/components/WishModal'
import { deepCopy } from '@/utils/deepCopy'
import { Basket } from '@/service/models'

const initialItem = {
  id: 0,
  title: '',
  price: '',
  url: '',
  image: '',
}
const WishDetail: NextPage = (): JSX.Element => {
  const [wishItems, setWishItems] = useState(
    Array.from({ length: 15 }, () => ({
      seq: 0,
      id: 0,
      title: '',
      price: '',
      url: '',
      image: '',
      giverName: '',
    })),
  )
  const [wishMeta, setWishMeta] = useState({
    title: '',
    description: '',
    userImage: '',
  })

  const [selectedItem, setSelectedItem] = useState(initialItem)

  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClickWishItemDefault = useCallback(() => {
    setIsModalOpen(true)
    setSelectedItem(initialItem)
  }, [setIsModalOpen])

  const handleWishItemClick = useCallback(
    (selectedItem) => {
      setIsModalOpen(true)
      setSelectedItem({
        ...selectedItem,
      })
    },
    [setIsModalOpen],
  )

  const handleMetaDataSave = ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => {
    // TODO: API 호출하기

    // wishMeta 정보 수정하기
    setWishMeta({
      ...wishMeta,
      title,
      description,
    })
  }

  const handleWishSave = (wish: Wish) => {
    // 등록 또는 수정 API 호출
    console.log('handleWishSave', selectedItem.id, wish)

    // selectedItem 리셋
    // setSelectedItem(initialItem)

    // 장바구니 아이템 목록을 업데이트 or 업데이트 한 아이템만 업데이트
  }

  useEffect(() => {
    const setWishData = async () => {
      const { items, title, description } = await getWishDetail() // TODO: API 변경

      const newWishes = deepCopy(wishItems)
      items.forEach((wish) => {
        newWishes[wish?.seq - 1] = wish
      })

      setWishItems(newWishes)
      setWishMeta({
        title: title,
        description: description,
        userImage: '', // TODO: GET user/me 호출해서 프로필을 출력한다
      })
    }

    setWishData()
  }, [wishItems])

  return (
    <>
      <S.Container>
        <WishInfo
          title={wishMeta.title}
          description={wishMeta.description}
          userImage={wishMeta.userImage}
          onSave={handleMetaDataSave}
        />

        <S.WishList>
          {wishItems.map(
            ({ id, title, price, url, image, giverName, seq }, index) => (
              <S.WishItemWrap key={index}>
                {seq === index + 1 && title && price && url ? (
                  <WishItemWithContent
                    title={title}
                    price={price}
                    url={url}
                    image={image}
                    giverName={giverName}
                    onClick={() =>
                      handleWishItemClick({
                        id,
                        title,
                        price,
                        url,
                        image,
                      })
                    }
                  />
                ) : (
                  <WishItemDefault onClick={handleClickWishItemDefault} />
                )}
              </S.WishItemWrap>
            ),
          )}
        </S.WishList>
      </S.Container>

      <WishModal
        {...selectedItem}
        isNew={selectedItem?.id <= 0}
        onClose={() => setIsModalOpen(false)}
        isOpen={isModalOpen}
        onSave={handleWishSave}
      >
        <div>등록창</div>
      </WishModal>
    </>
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
    max-height: 1080px;
  `,
  WishItemWrap: styled.div`
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

export interface Wish {
  seq: number
  title: string
  price: number
  url: string
  image?: string
  giverName?: string
}

const getWishDetail = async (): Promise<Basket> => {
  const response = await fetch('http://localhost:3000/mock.json')
  return await response.json()
}

export default WishDetail
