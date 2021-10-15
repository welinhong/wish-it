import styled from 'styled-components'

const WishItemDefault = (): JSX.Element => {
  return <S.Container>default</S.Container>
}

const S = {
  Container: styled.div`
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: #f2f4f6;
  `,
}

export default WishItemDefault
