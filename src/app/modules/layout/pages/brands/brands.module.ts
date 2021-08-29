import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './components/brands.component';
import { BrandsRoutingModule } from './brands-routing.module';
import { SiteBarModule } from 'src/app/shared/controls/site-bar/site-bar.module';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { DefaultCardModule } from 'src/app/shared/controls/cards/default-card.module';

@NgModule({
  declarations: [
    BrandsComponent
  ],
  imports: [
    CommonModule,
    BrandsRoutingModule,
    SiteBarModule,
    MatExpansionModule,
    MatCheckboxModule,
    DefaultCardModule
  ],
  exports: [
    BrandsComponent
  ]
})
export class BrandsModule { }
