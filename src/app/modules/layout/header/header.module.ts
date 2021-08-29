import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header.component'; 
import { DefaultButtonModule } from 'src/app/shared/controls/buttons/default-button/default-button.module';
import { InputModule } from 'src/app/shared/controls/inputs/input/input.module';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { FormsModule } from '@angular/forms';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DefaultButtonModule,
    InputModule,
    NzIconModule,
    NzTabsModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
