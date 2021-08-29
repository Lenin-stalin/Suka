import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfumeryComponent } from './components/perfumery.component';
import { PerfumeryRoutingModule } from './perfumery-routing.module';



@NgModule({
  declarations: [
    PerfumeryComponent
  ],
  imports: [
    CommonModule,
    PerfumeryRoutingModule
  ],
  exports: [
    PerfumeryComponent
  ]
})
export class PerfumeryModule { }
