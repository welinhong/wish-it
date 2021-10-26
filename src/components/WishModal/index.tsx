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
  siteUrl?: string
  photoUrl?: string
  onSave: (data: any) => void
}

const WishModal = ({
  title,
  price,
  siteUrl,
  photoUrl,
  isOpen,
  onClose,
  onSave,
}: Props): JSX.Element => {
  const [wish, setWish] = useState({
    title,
    price,
    siteUrl,
    photoUrl,
  })

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setWish((prevWish) => ({
      ...prevWish,
      [name]: value,
    }))
  }

  const handleURLSave = async () => {
    if (!wish?.siteUrl) return
    const { title, image } = await getOgTagFromUrl(wish?.siteUrl)

    setWish((prevWish) => ({
      ...prevWish,
      title,
      photoUrl: image,
    }))
  }

  const handleSave = () => {
    onSave({
      ...wish,
    })
  }

  useEffect(() => {
    setWish((prevWish) => ({
      ...prevWish,
      title,
      price,
      photoUrl,
      siteUrl,
    }))
  }, [title, price, photoUrl, siteUrl])

  return (
    <Modal width="1024px" isOpen={isOpen} onClose={onClose}>
      <Typography type="header2" as="h2">
        등록하기
      </Typography>

      <StyledContent>
        <StyledForm>
          <TextInput
            name="siteUrl"
            value={wish.siteUrl}
            typographyType="body1"
            placeholder="제품의 URL을 입력해주세요"
            onChange={handleInputChange}
          />

          {wish?.siteUrl && wish?.photoUrl ? (
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
            src={wish.photoUrl}
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
