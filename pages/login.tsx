/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void
      isInitialized: () => boolean
      authorize: () => void
      API: {
        request: (settings: any) => Promise<any>
      }
      Auth: {
        authorize: (settings: any) => void
        login: (settings: any) => void
        logout: () => void
      }
    }
  }
}

const LoginPage: NextPage = () => {
  const [isKakaoSDKInitialized, setIsKakaoSDKInitialized] = useState(false)

  const handleLoginButton = () => {
    if (!window?.Kakao) {
      return
    }

    // 카카오서버에 인가코드 요청하기
    window.Kakao.Auth.authorize({
      redirectUri: `http://localhost:3000/auth`,
    })
  }

  const initializeKakaoSDK = () => {
    if (!process?.env?.NEXT_PUBLIC_KAKAO_APP_KEY) return

    window?.Kakao.init(process?.env?.NEXT_PUBLIC_KAKAO_APP_KEY)
    setIsKakaoSDKInitialized(window?.Kakao.isInitialized())
  }

  useEffect(() => {
    if (window?.Kakao && !window?.Kakao.isInitialized()) {
      initializeKakaoSDK()
    }
  }, [])

  return (
    <>
      <Head>
        <script async src="https://developers.kakao.com/sdk/js/kakao.js" />
      </Head>
      <StyledLoginPage>
        <h3>Login Page</h3>

        <StyledKakaoButton disabled={!isKakaoSDKInitialized} onClick={handleLoginButton}>
          <img
            src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg"
            width="222"
            alt="Kakao Login Button"
          />
        </StyledKakaoButton>
      </StyledLoginPage>
    </>
  )
}

const StyledLoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
interface StyledKakaoButtonProps {
  disabled?: boolean
}
const StyledKakaoButton = styled.button<StyledKakaoButtonProps>`
  background: none;
  border: none;
  padding: 0;
  font-size: 0;
  cursor: pointer;
  ${({ disabled }) => disabled && `cursor: not-allowed;`}
`

export default LoginPage
