import { MaterialType, ProductType, Stone } from '../enums/item-enams';

export interface Product {
  id: number,
  name: string,
  img: string,
  type: ProductType,
  material: MaterialType,
  stone: Stone,
  popular: boolean,
  year: number,
  quantity: number
}
