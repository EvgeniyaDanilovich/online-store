import { Component } from '@angular/core';
import { CartProduct, CartService } from '../../../../common/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
    cartProducts: CartProduct[] = this.cartService.products;

    constructor(private cartService:CartService) {
    }

  removeItem(id:number): void{
    this.cartService.removeItemFromCart(id)
  }

  minusItem(id: number):void{
      this.cartService.minusQuantity(id)
  }

  plusItem(id: number):void{
    this.cartService.plusQuantity(id)
  }

}
