import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultCheckboxComponent } from './components/default-checkbox.component';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DefaultCheckboxComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NzCheckboxModule
  ],
  exports: [
    DefaultCheckboxComponent
  ]
})
export class CheckboxModule { }
