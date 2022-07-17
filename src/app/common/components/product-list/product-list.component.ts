import { Component, Input } from '@angular/core';
import { Card } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()
  cards: Card[];

  constructor(private cartService: CartService) {
  }

  addItemToCart(card: Card): void {
    this.cartService.addToCart(card)
  }
}
