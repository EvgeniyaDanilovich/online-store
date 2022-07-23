import { ProductType } from '../enums/item-enams';

export interface CartItem{
  type: ProductType,
  quantity: number
}
