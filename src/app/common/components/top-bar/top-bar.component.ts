import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { RouterPath } from '../../enums/router-path';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})

export class TopBarComponent {
  count$ = this.cartService.count$;

  constructor(private router: Router,
              public cartService: CartService
  ) {
    // this.cartService.restoreFromStorage();
    console.log(this.cartService);
    this.cartService.count$.subscribe(v => console.log(v))
  }

  onLogoClick() {
    this.router.navigate([RouterPath.CATALOG]);
  }

  onCartClick() {
    this.router.navigate([RouterPath.CART]);
  }
}
