import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleComponent } from './components/sale.component';
import { SaleRoutingModule } from './sale-routing.module';



@NgModule({
  declarations: [
    SaleComponent
  ],
  imports: [
    CommonModule,
    SaleRoutingModule
  ],
  exports: [
    SaleComponent
  ]
})
export class SaleModule { }
