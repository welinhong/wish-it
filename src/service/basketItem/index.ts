import { fetcher } from '@/service/utils/fetcher'
import { Basket, BasketItem } from '@/service/models'

export const postBasketItem = async (
  basketId: string,
  payload: BasketItem,
): Promise<Basket> => {
  const basket = await fetcher<any>({
    url: `/basket/${basketId}/items`,
    method: 'POST',
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

export const deleteBasketItem = async (
  basketId: string,
  basketItemId: string,
): Promise<Basket> => {
  const basket = await fetcher<any>({
    url: `/basket/${basketId}/items/${basketItemId}`,
    method: 'DELETE',
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

export const putBasketItem = async (
  basketId: string,
  basketItemId: string,
  payload: BasketItem,
): Promise<Basket> => {
  const basket = await fetcher<any>({
    url: `/basket/${basketId}/items/${basketItemId}`,
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
