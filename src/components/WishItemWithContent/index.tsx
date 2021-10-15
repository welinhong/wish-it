import styled from 'styled-components'

export interface Props {
  title: string
  price: number
  siteUrl: string
  photoUrl?: string
  giverName?: string
}

const WishItemWithContent = (props: Props): JSX.Element => {
  const { title, price, siteUrl, photoUrl, giverName } = props

  return <S.Container>content</S.Container>
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: #f2f4f6;
  `,
}

export default WishItemWithContent
