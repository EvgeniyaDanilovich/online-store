import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-product',
  templateUrl: './cart-product.component.html',
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent {

  constructor(private cartService: CartService) { }

  @Input()
  name: string;

  @Input()
  type: string;

  @Input()
  quantity: number;

  @Input()
  img: string;

  @Output()
  removeItemFromCart: EventEmitter<void> = new EventEmitter<void>;

  removeItem(): void{
     this.removeItemFromCart.emit()
  }

  @Output()
  minusQuantity: EventEmitter<void> = new EventEmitter<void>;

  minusItem():void{
    this.minusQuantity.emit()
  }

  @Output()
  plusQuantity: EventEmitter<void> = new EventEmitter<void>;

  plusItem():void{
    this.plusQuantity.emit()
  }
}
