import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ComponentsModule } from 'src/app/common/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    ComponentsModule,
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule {
}
