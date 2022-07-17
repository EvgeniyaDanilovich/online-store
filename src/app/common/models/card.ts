import { MaterialType, ProductType, Stone } from '../enums/item-enams';

export interface Card {
  name: string,
  img: string,
  type: ProductType,
  material: MaterialType,
  stone: Stone,
  popular: boolean,
  year: number,
  quantity: number
}
