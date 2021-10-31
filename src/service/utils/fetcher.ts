import axios, { AxiosResponse, Method } from 'axios'

interface FetcherParams {
  url: string
  method?: Method
  data?: unknown
  params?: unknown
  config?: { [key: string]: unknown }
  baseURL?: string
  headers?: unknown
}

export const fetcher = async <T>({
  url,
  method = 'GET',
  data = null,
  params = null,
  baseURL = '',
  headers,
  config,
}: FetcherParams): Promise<T> => {
  const result: AxiosResponse<T> = await axios({
    method,
    url,
    data,
    params,
    baseURL,
    headers,
    ...config,
  })

  return result.data
}
