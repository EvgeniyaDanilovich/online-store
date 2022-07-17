import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterPath } from 'src/app/common/enums/router-path';
import { CatalogComponent } from './catalog.component';

const routes: Routes = [
  {
    path: RouterPath.EMPTY,
    component: CatalogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CatalogRoutingModule { }
