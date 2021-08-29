import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultButtonComponent } from './components/default-button.component'; 
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [
    DefaultButtonComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzIconModule,
  ],
  exports: [
    DefaultButtonComponent
  ]
})
export class DefaultButtonModule { }
