/* eslint-disable @typescript-eslint/no-explicit-any */

declare global {
  interface Window {
    Kakao: {
      init: (appKey: string) => void
      isInitialized: () => boolean
      authorize: () => void
      Auth: {
        authorize: (settings: any) => void
        login: (settings: any) => void
        logout: () => void
      }
    }
  }
}

export const checkIfKakaoSDKIsInitialized = (): boolean => {
  return window?.Kakao?.isInitialized()
}

export const initializeKakaoSDK = (): boolean => {
  if (!process?.env?.NEXT_PUBLIC_KAKAO_APP_KEY) return false

  window?.Kakao.init(process?.env?.NEXT_PUBLIC_KAKAO_APP_KEY)
  return window?.Kakao.isInitialized()
}

export const authorizeKakaoAuth = (): void => {
  window.Kakao.Auth.authorize({
    redirectUri: `http://localhost:3000/auth`,
  })
}
