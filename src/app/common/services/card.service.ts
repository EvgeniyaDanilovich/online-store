import { Injectable } from '@angular/core';
import { DataBaseService } from './data-base.service';
import { Card } from '../models';
import { BehaviorSubject, first, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  originalCards$: Subject<Card[]> = this.dataBaseService.data$; // фильтры используют эти данные и пишет новые в filteredCards
  filteredCards$: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([]); // сортировка использует эти данные и пишет новые сюда же

  constructor(private dataBaseService: DataBaseService) {
    this.originalCards$.pipe(
      first()
    ).subscribe((cards: Card[]) =>
      this.filteredCards$.next(cards)
    );
  }
}
