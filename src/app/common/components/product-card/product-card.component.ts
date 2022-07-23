import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialType, ProductType, Stone } from '../../enums/item-enams';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  activeItem: boolean = false;

  @Input()
  img: string;

  @Input()
  name: string;

  @Input()
  material: MaterialType;

  @Input()
  type: ProductType;

  @Input()
  stone: Stone;

  @Input()
  popular: boolean;

  @Input()
  year: number;

  @Input()
  quantity: number;

  @Output()
  addToCart: EventEmitter<void> = new EventEmitter<void>(); // создание события нажатия на кнопку картояки

  addItemToCart(): void { // при нажатии сделать редирект на страницу продукта (потом)
    this.addToCart.emit(); // триггер события и передали в него void
    if(!this.activeItem){
      this.activeItem = !this.activeItem;
    }
  }

  @Output()
  removeItemFromCart: EventEmitter<void> = new EventEmitter<void>();

  removeItem():void{
    this.removeItemFromCart.emit();
    if(this.activeItem){
      this.activeItem = !this.activeItem;
    }
  }
}
