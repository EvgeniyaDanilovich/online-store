import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from 'src/app/common/enums/router-path';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: RouterPath.EMPTY,
    component: MainComponent,
    children: [
      {
        path: RouterPath.CATALOG,
        loadChildren: () => import('./modules/catalog/catalog.module').then(m => m.CatalogModule)
      },
      {
        path: RouterPath.CART,
        loadChildren: () => import('./modules/cart/cart.module').then(m => m.CartModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
