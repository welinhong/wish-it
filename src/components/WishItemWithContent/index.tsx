import styled from 'styled-components'
import Typography from '@/components/Typography'

export interface Props {
  title: string
  price: number
  siteUrl: string
  photoUrl?: string
  giverName?: string
}

const WishItemWithContent = (props: Props): JSX.Element => {
  const { title, price, siteUrl, photoUrl, giverName } = props

  return (
    <SContainer>
      {photoUrl ? (
        <SPhoto src={photoUrl} alt={title} />
      ) : (
        <SOnlyTitle>
          <h2>{title}</h2>
        </SOnlyTitle>
      )}

      <SInformation>
        <Typography type="header2" as="h2" marginBottom="8px" ellipsis>
          {title}
        </Typography>
        <Typography type="body2" as="p" marginBottom="8px" ellipsis>
          {price}원
        </Typography>
        <Typography type="body2" color="primary" as="p" marginBottom="8px" ellipsis>
          {getOrigin(siteUrl)}
        </Typography>
        <Typography type="header3" as="h3" marginBottom="8px" ellipsis>
          by {giverName}
        </Typography>
      </SInformation>
    </SContainer>
  )
}

const getOrigin = (url: string) => {
  return new URL(url).origin
}

const SPhoto = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const SOnlyTitle = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
    background: linear-gradient(106.45deg, #1e50ff 0%, #abff4d 98.75%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`
const SInformation = styled.div`
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 25px 20px;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  color: #ffffff;
  overflow: hidden;
`
const SContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: inherit;
  border: 1px solid #f2f4f6;
  background-color: #f2f4f6;
  cursor: pointer;
  &:hover {
    ${SInformation} {
      display: block;
    }
  }
  > * {
    border-radius: inherit;
  }
`

export default WishItemWithContent
