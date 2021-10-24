import styled from 'styled-components'
import Modal, { Props as ModalProps } from '@/components/Modal'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'
import Typography from '@/components/Typography'
import { ChangeEvent, useState } from 'react'

export interface Props extends ModalProps {
  onSave: () => void
}

const WishModal = ({ isOpen, onClose, onSave }: Props): JSX.Element => {
  const [siteUrl, setSiteUrl] = useState('')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSiteUrl(e.target.value)
  }

  // TODO: 입력한 URL의 이미지 URL을 가져온다
  const handleURLSave = () => {
    setPhotoUrl(
      'https://cdn.011st.com/11dims/resize/720x360/quality/75/11src/asin/B000BIVY2Y/B.jpg?540000000',
    )
  }

  return (
    <StyledModal isOpen={isOpen} onClose={onClose}>
      <Typography type="header2" as="h2">
        등록하기
      </Typography>

      <StyledContent>
        <StyledForm>
          <TextInput
            placeholder="제품의 URL을 입력해주세요"
            value={siteUrl}
            onChange={handleInputChange}
          />

          {siteUrl && photoUrl ? (
            <>
              <TextInput placeholder="이름을 입력해주세요" />
              <TextInput placeholder="가격을 입력해주세요" />
              <Button onClick={onSave}>저장하기</Button>
            </>
          ) : (
            <Button onClick={handleURLSave}>URL 입력완료</Button>
          )}
        </StyledForm>
        <StyledSquareImage>
          <img src={photoUrl} alt="제품의 URL을 입력하시면 이곳에 제품의 사진이 보입니다" />
        </StyledSquareImage>
      </StyledContent>
    </StyledModal>
  )
}

const StyledModal = styled(Modal)``
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
