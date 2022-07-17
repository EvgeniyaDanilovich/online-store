import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Card } from '../models';
import { Subject } from 'rxjs';

// import SampleJson from 'src/assets/cards.json';

interface DataBaseServiceModel {
  data$: Subject<Card[]>;
  fetchCatalogData(): void;
}

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements DataBaseServiceModel {
  data$: Subject<Card[]> = new Subject<Card[]>();

  constructor(private http: HttpClient) {
  }

  fetchCatalogData(): void {
    const url = 'assets/cards.json';
    this.http.get<Card[]>(url).subscribe((res: Card[]) => this.data$.next(res));
  }
}
