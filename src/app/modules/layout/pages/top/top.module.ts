import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './components/top.component';
import { TopRoutingModule } from './top-routing.module';



@NgModule({
  declarations: [
    TopComponent
  ],
  imports: [
    CommonModule,
    TopRoutingModule
  ],
  exports: [
    TopComponent
  ]
})
export class TopModule { }
