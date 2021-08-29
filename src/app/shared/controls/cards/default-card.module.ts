import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DefaultCardComponent } from './default-card.component';


@NgModule({
  declarations: [DefaultCardComponent],
  imports: [
    CommonModule,
    NzCardModule
  ],
  exports: [DefaultCardComponent]
})
export class DefaultCardModule { }
