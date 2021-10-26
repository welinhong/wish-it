import { fetcher } from './../service/utils/fetcher'

export const getOgTagFromUrl = async (
  url: string,
): Promise<{ [key: string]: string } | undefined> => {
  // url 호출해서 html 불러오기
  const html = await fetcher<string>({
    url,
    method: 'GET',
  })
  if (!html) return

  // html로부터 meta tag 가져오기
  const metaTags = parseHTML(html)?.getElementsByTagName('meta')

  // og 태그만 필터링
  const metaInfos = Array.from(metaTags)
  const openGraphes = metaInfos.filter((meta) => {
    return Array.from(meta.attributes).findIndex((attr) => attr.value.includes('og')) > -1
  })
  return openGraphes.reduce((prev, cur) => {
    const [property, content] = Array.from(cur.attributes)
    return {
      ...prev,
      [property?.value]: content?.value,
    }
  }, {})
}

function parseHTML(htmlString: string) {
  const parser = new DOMParser()
  return parser.parseFromString(htmlString, 'text/html')
}
