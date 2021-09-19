import Spinner from '@/components/Spinner/Spinner'
import { NextPage } from 'next'
import { useEffect } from 'react'
import styled from 'styled-components'

const AuthPage: NextPage = () => {
  const getAuthorizationCode = (): string | null => {
    const requestUrl = new URL(window.location.href)
    return requestUrl.searchParams.get('code')
  }

  useEffect(() => {
    const authorizationCode = getAuthorizationCode()
    console.log('authorizationCode', authorizationCode)

    // TODO: 서버 로그인 API 호출 - 인가코드를 우리 서버에 보내고, jwt 받아서 저장하기

    // 메인페이지로 이동하기
  }, [])

  return (
    <StyledContainer>
      <Spinner />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export default AuthPage
