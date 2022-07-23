import { Injectable } from '@angular/core';
import { Product } from '../models';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';
import { LocalStorageKeys } from '../enums/local-storage-keys';

export interface CartProduct {
  id: number; // id producta
  quantity: number; // colichestvo v korzine
  product: Product; // sam product
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  count$: BehaviorSubject<number> = new BehaviorSubject<number>(-1);
  products: CartProduct[] = []; // TODO сделать мапой

  constructor(private localStorageService: LocalStorageService) {
  }

  restoreFromStorage(): void {
    this.products = this.localStorageService.getItem<CartProduct[]>(LocalStorageKeys.CART_PRODUCTS) || [];
    this.count$.next(this.products.length);
  }

  addToCart(product: Product): void {
    // TODO 2. добавляешь продукты в переменную (если их там нет)
    if(this.count$.getValue() < 20){

      this.localStorageService.removeItem(LocalStorageKeys.CART_PRODUCTS);

      this.products.push({
        id: product.id,
        quantity: 1,
        product: product
      })
      this.localStorageService.setItem(LocalStorageKeys.CART_PRODUCTS, this.products);
      this.count$.next(this.count$.getValue() + 1);
    }
    if(this.count$.getValue() == 20) {
      alert('Sorry, all slots are hidden');
    }
  }

  removeItemFromCart(id: number): void{
    if(this.count$.getValue() === 0) return

    this.localStorageService.removeItem(LocalStorageKeys.CART_PRODUCTS);

    this.products.forEach((item: CartProduct, i: number) =>{
      if(item.id === id){
        this.products.splice(i,1);
        this.count$.next(this.count$.getValue() - 1);
      }
    })

    this.localStorageService.setItem(LocalStorageKeys.CART_PRODUCTS, this.products);
  }

  minusQuantity(id: number):void{
    this.products.forEach((item:CartProduct)=>{
      if(item.id === id && item.quantity > 1){
        item.quantity--
      }
    })
  }

  plusQuantity(id: number):void{
    this.products.forEach((item:CartProduct)=>{
      if(item.id === id){
        item.quantity++
      }
    })
  }

}
