import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpiritsAndWineComponent } from './components/spirits-and-wine.component';
import { WineRoutingModule } from './spirits-and-wine-routing.module';



@NgModule({
  declarations: [
    SpiritsAndWineComponent
  ],
  imports: [
    CommonModule,
    WineRoutingModule
  ],
  exports: [
    SpiritsAndWineComponent
  ]
})
export class SpiritsAndWineModule { }
