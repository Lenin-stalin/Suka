import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout.component';
import { HeaderModule } from './header/header.module';
import { LayoutRoutingModule } from './layout-routing.module';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { CheckboxModule } from 'src/app/shared/controls/checkboxes/default-checkbox/default-checkbox.module';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    LayoutRoutingModule,
    NzTabsModule,
    CheckboxModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
