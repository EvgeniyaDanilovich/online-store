import { Component } from '@angular/core';
import { DataBaseService } from '../../../../common/services/data-base.service';
import { CardService } from '../../../../common/services/card.service';
import { BehaviorSubject } from 'rxjs';
import { Card } from '../../../../common/models';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent {
  cards$: BehaviorSubject<Card[]> = this.cardService.filteredCards$; // только для отображения. Ничего с ней больше не делать
  cards: Card[] = [];

  constructor(private dataBaseService: DataBaseService,
              private cardService: CardService
  ) {
    this.dataBaseService.fetchCatalogData();
    // this.cardService.filteredCards$.subscribe((cards: Card[]) => this.cards = cards);
  }
}
