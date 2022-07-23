import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { FooterComponent } from './footer/footer.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchComponent } from './search/search.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartProductComponent } from './cart-product/cart-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,

    FilterComponent,
    FooterComponent,
    ProductListComponent,
    SearchComponent,
    TopBarComponent,
    ProductCardComponent,
    CartProductComponent
  ],
  declarations: [
    FilterComponent,
    FooterComponent,
    ProductListComponent,
    SearchComponent,
    TopBarComponent,
    ProductCardComponent,
    CartProductComponent
  ]
})
export class ComponentsModule { }
