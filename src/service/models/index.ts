// view에 맞춰 model interface를 정의한다
export interface Basket {
  id: number
  title: string
  desc: string
  memberId: string
  items: BasketItem[]
}

export interface BasketItem {
  id: number
  title: string
  price: string
  url: string
  image: string
  giverName: string
  seq: number
}
