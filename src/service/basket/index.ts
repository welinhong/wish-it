import { Basket } from '@/service/models'
import { fetcher } from '@/service/utils/fetcher'

export const getBasketList = async (userId: string): Promise<Basket[]> => {
  // TODO: 서버 Response 타입 정의 필요할까!?
  const baskets = await fetcher<any[]>({
    url: '/basket',
    params: { userId },
    method: 'GET',
  })

  return baskets.map((basket: any) => {
    const items = basket.shoppingItemResponse.map((item: any) => ({
      id: item.id,
      title: item.title,
      price: item.price.price,
      url: item.url,
      image: item.images[0],
      giverName: item.reservationMemberId,
      seq: item.seq,
    }))
    return {
      id: basket.id,
      title: basket.title,
      description: basket.description,
      memberId: basket.memberId,
      items,
    }
  })
}

export const getBasket = async (id: string): Promise<Basket> => {
  const basket = await fetcher<any>({
    url: `/basket/${id}`,
    method: 'GET',
  })

  const items = basket.shoppingItemResponse.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price.price,
    url: item.url,
    image: item.images[0],
    giverName: item.reservationMemberId,
    seq: item.seq,
  }))
  return {
    id: basket.id,
    title: basket.title,
    description: basket.description,
    memberId: basket.memberId,
    items,
  }
}

interface BasketMeta {
  title: string
  description: string
}
export const putBasket = async (
  id: string,
  payload: BasketMeta,
): Promise<Basket> => {
  const basket = await fetcher<any>({
    url: `/basket/${id}`,
    method: 'PUT',
    data: payload,
  })

  const items = basket.shoppingItemResponse.map((item: any) => ({
    id: item.id,
    title: item.title,
    price: item.price.price,
    url: item.url,
    image: item.images[0],
    giverName: item.reservationMemberId,
    seq: item.seq,
  }))
  return {
    id: basket.id,
    title: basket.title,
    description: basket.description,
    memberId: basket.memberId,
    items,
  }
}
