import Image from 'next/image'
import styled from 'styled-components'
import Typography from '@/components/Typography'
import { ChangeEvent, useEffect, useState } from 'react'
import TextInput from '@/components/TextInput'
import Button from '@/components/Button'

export interface Props {
  title: string
  description: string
  userImage?: string
  onSave: ({
    title,
    description,
  }: {
    title: string
    description: string
  }) => void
}

const WishInfo = ({
  title,
  description,
  userImage,
  onSave,
}: Props): JSX.Element => {
  const [values, setValues] = useState({
    title,
    description,
  })
  const [editable, setEditable] = useState(false)

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }))
  }

  const handleEdit = () => {
    setEditable(true)
  }

  const handleSave = () => {
    onSave({
      title: values.title,
      description: values.description,
    })
    setEditable(false)
  }

  useEffect(() => {
    setValues((prevValues) => ({
      prevValues,
      title,
      description,
    }))
  }, [title, description])

  return (
    <StyledContainer>
      <StyledUserImage>
        {userImage && <Image src={userImage} alt="User Image" />}
      </StyledUserImage>

      {editable ? (
        <StyledMeta>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <StyledTextInput
              value={values.title}
              name="title"
              width="50%"
              placeholder="Wish List의 제목을 입력해주세요"
              typographyType="header2"
              onChange={handleInputChange}
            />
            <Button onClick={handleSave}>저장하기</Button>
          </div>
          <StyledTextInput
            name="descriptino"
            value={values.description}
            placeholder="Wish에 대한 소개를 입력해주세요"
            typographyType="body1"
            onChange={handleInputChange}
          />
        </StyledMeta>
      ) : (
        <StyledMeta>
          <Typography type="header2" as="h2" marginBottom="8px">
            {title}
          </Typography>
          <Typography type="body2" as="p">
            {description}
          </Typography>
          <button onClick={handleEdit}>수정</button>
        </StyledMeta>
      )}
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
  max-width: 70%;
  margin-left: 40px;
`
const StyledTextInput = styled(TextInput)<{ width?: string }>`
  ${({ width }) => width && `width: ${width};`}
  margin-bottom: 34px;
`

export default WishInfo
