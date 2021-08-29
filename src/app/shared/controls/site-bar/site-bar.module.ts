import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteBarComponent } from './components/site-bar.component';
import {MatExpansionModule} from '@angular/material/expansion';


@NgModule({
  declarations: [
    SiteBarComponent
  ],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports:[
    SiteBarComponent
  ]
})
export class SiteBarModule { }
