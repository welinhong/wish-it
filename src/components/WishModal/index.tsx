import { ChangeEvent, useEffect, useState } from 'react'
import styled from 'styled-components'
import Modal, { Props as ModalProps } from '@/components/Modal'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import { getOgTagFromUrl } from '@/utils/urlScraper'

export interface Props extends ModalProps {
  title?: string
  price?: string
  url?: string
  image?: string
  onSave: (data: any) => void
}

const WishModal = ({
  title,
  price,
  url,
  image,
  isOpen,
  onClose,
  onSave,
}: Props): JSX.Element => {
  const [wish, setWish] = useState({
    title,
    price,
    url,
    image,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setWish((prevWish) => ({
      ...prevWish,
      [name]: value,
    }))
  }

  const handleURLSave = async () => {
    if (!wish?.url) return
    const { title, image } = await getOgTagFromUrl(wish?.url)

    setWish((prevWish) => ({
      ...prevWish,
      title,
      image: image,
    }))
  }

  const handleSave = () => {
    onSave({
      ...wish,
    })
  }

  const reset = () => {
    console.log('reset')
    console.log('1', wish.url)

    setWish({
      title: '',
      price: '',
      url: '',
      image: '',
    })
    console.log('2', wish.url)
  }

  useEffect(() => {
    setWish((prevWish) => ({
      ...prevWish,
      title,
      price,
      image,
      url,
    }))
  }, [title, price, image, url])

  useEffect(() => {
    // TODO: 모달창이 닫히면 데이터를 리셋하는 것부터 작업하기
  }, [isOpen])

  return (
    <Modal width="1024px" isOpen={isOpen} onClose={onClose}>
      <Typography type="header2" as="h2">
        등록하기
      </Typography>

      <StyledContent>
        <StyledForm>
          <TextInput
            name="url"
            value={wish.url}
            typographyType="body1"
            placeholder="제품의 URL을 입력해주세요"
            onChange={handleInputChange}
          />

          {wish?.url && wish?.image ? (
            <>
              <TextInput
                name="title"
                value={wish.title}
                typographyType="body1"
                placeholder="이름을 입력해주세요"
                onChange={handleInputChange}
              />
              <TextInput
                name="price"
                value={wish.price}
                typographyType="body1"
                placeholder="가격을 입력해주세요"
                onChange={handleInputChange}
              />
              <Button onClick={handleSave}>저장하기</Button>
            </>
          ) : (
            <Button onClick={handleURLSave}>URL 입력완료</Button>
          )}
        </StyledForm>
        <StyledSquareImage>
          <img
            src={wish.image}
            alt="제품의 URL을 입력하시면 이곳에 제품의 사진이 보입니다"
          />
        </StyledSquareImage>
      </StyledContent>
    </Modal>
  )
}

const StyledContent = styled.div`
  display: flex;
  width: 100%;
  padding: 30px 0 20px 0;
  > * {
    flex: 1;
  }
`
const StyledForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & > * {
    margin-bottom: 20px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
`
const StyledSquareImage = styled.div`
  position: relative;
  width: 100%;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
  flex-shrink: 0;
  background-color: lightgray;
  margin-left: 30px;
  border-radius: 8px;
  &:after {
    content: '';
    display: block;
    padding-top: 100%;
  }
  img {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: inherit;
    border-radius: inherit;
  }
`

export default WishModal
