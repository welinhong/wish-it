import { User } from '@/service/models'
import { fetcher } from '@/service/utils/fetcher'

export const postLogin = async ({
  code,
  socialType,
}: {
  code: string
  socialType: string
}): Promise<User> => {
  return await fetcher({
    url: '/user/signin',
    method: 'POST',
    data: {
      code,
      socialType,
      redirectUri: '', // 제거 될 예정
    },
  })
}

export const getMyAccount = async (): Promise<User> => {
  return await fetcher({
    url: '/user/me',
  })
}
