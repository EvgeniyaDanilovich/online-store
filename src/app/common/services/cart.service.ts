import { Injectable } from '@angular/core';
import { Card } from '../models';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private counter: number = 0;
  count$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  // pruducts: Card[] = []; // TODO сделать мапой
  pruducts = new Map<string,Card>();

  constructor(private localStorageService: LocalStorageService) { // TODO !!!!!!!!!! закинуть сюда LOCAL storage service
    // this.localStorageService.setItem('cartProducts',this.counter.toString());
  } // TODO get items from storage and set them into array, after that - increase counter

  // TODO 1. доюивить метод инициализации (restoreFromStorage), в котором лок стор будет отдавать сохраненные данные. Эти данные ты сохраняешь в переменную
  // TODO 2. в том эе методе обновишь свой счетчик

  addToCart(product: Card): void {
    // TODO 0. добавить енам с возможными ключами лок стора
    // TODO 1. очищаешь лок стор
    // TODO 2. добавляешь продукты в переменную (если их там нет)
    // TODO 3. увеличиваешь счетчик
    // TODO 4. сохраняешь в стор
    console.log(product);
    this.counter++;
    this.count$.next(this.counter);
  }
}
