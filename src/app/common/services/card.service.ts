import { Injectable } from '@angular/core';
import { DataBaseService } from './data-base.service';
import { Product } from '../models';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  originalCards$: Subject<Product[]> = this.dataBaseService.data$; // фильтры используют эти данные и пишет новые в filteredCards
  normalOriginalCards$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  filteredCards$: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]); // сортировка использует эти данные и пишет новые сюда же

  constructor(private dataBaseService: DataBaseService) {
    this.originalCards$.subscribe((cards: Product[]) =>
      this.filteredCards$.next(cards)
    );
    this.originalCards$.subscribe((cards: Product[]) =>
      this.normalOriginalCards$.next(cards)
    );
  }

  selectGoldItems():void{
    let arr = this.normalOriginalCards$.getValue();

    arr.forEach((item:Product, i:number)=>{
      if(item.material !== 'Gold'){
        arr.splice(i, 1);
      }
    })

    this.filteredCards$.next(arr)
  }

  selectSilverItems():void {
    let arr = this.normalOriginalCards$.getValue();

    arr.forEach((item:Product, i:number)=>{
      if(item.material !== 'Silver'){
        arr.splice(i, 1);
      }
    })

    this.filteredCards$.next(arr)
  }
}
