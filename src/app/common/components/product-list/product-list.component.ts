import { Component, Input } from '@angular/core';
import { Product } from '../../models';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  @Input()
  cards: Product[];

  constructor(private cartService: CartService) {
  }

  addItemToCart(card: Product): void {
    this.cartService.addToCart(card)
  }

  removeItem(id: number):void{
    this.cartService.removeItemFromCart(id);
  }
}
