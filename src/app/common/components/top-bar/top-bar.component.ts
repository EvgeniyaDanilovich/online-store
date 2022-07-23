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
  @Input()
  productsCount: number;

  constructor(private router: Router) {
  }

  onLogoClick(): void {
    this.router.navigate([RouterPath.CATALOG]);
  }

  onCartClick(): void {
    this.router.navigate([RouterPath.CART]);
  }
}
