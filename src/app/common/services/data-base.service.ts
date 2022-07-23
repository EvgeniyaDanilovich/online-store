import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../models';
import { Subject } from 'rxjs';

// import SampleJson from 'src/assets/cards.json';

interface DataBaseServiceModel {
  data$: Subject<Product[]>;
  fetchCatalogData(): void;
}

@Injectable({
  providedIn: 'root'
})
export class DataBaseService implements DataBaseServiceModel {
  data$: Subject<Product[]> = new Subject<Product[]>();

  constructor(private http: HttpClient) {
    // console.log(this.data$)
  }

  fetchCatalogData(): void {
    const url = 'assets/cards.json';
    this.http.get<Product[]>(url).subscribe((res: Product[]) => this.data$.next(res));
  }
}
