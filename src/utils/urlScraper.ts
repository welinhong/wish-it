import { fetcher } from './../service/utils/fetcher'

type OpTag = {
  title?: string
  image?: string
  description?: string
  type?: string
}
export const getOgTagFromUrl = async (url: string): Promise<OpTag> => {
  // url 호출해서 html 불러오기
  const html = await fetcher<string>({
    url,
    method: 'GET',
  })
  if (!html) return {}

  // html로부터 meta tag 가져오기
  const metaTags = parseHTML(html)?.getElementsByTagName('meta')

  // og 태그만 필터링
  const metaInfos = Array.from(metaTags)
  const openGraphes = metaInfos.filter((meta) => {
    return (
      Array.from(meta.attributes).findIndex((attr) =>
        attr.value.includes('og'),
      ) > -1
    )
  })
  return openGraphes.reduce((prev, cur) => {
    const [property, content] = Array.from(cur.attributes)
    const key = property?.value.replace('og:', '')
    return {
      ...prev,
      [key]: content?.value,
    }
  }, {})
}

function parseHTML(htmlString: string) {
  const parser = new DOMParser()
  return parser.parseFromString(htmlString, 'text/html')
}
