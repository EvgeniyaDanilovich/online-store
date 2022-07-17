import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from 'src/app/common/enums/router-path';
import { CartComponent } from './cart.component';

const routes: Routes = [
  {
    path: RouterPath.EMPTY,
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule { }
