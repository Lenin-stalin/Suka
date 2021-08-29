import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'brands',
        loadChildren: () =>
          import('./pages/brands/brands.module').then(
            (m) => m.BrandsModule
          ),
      },
      {
        path: 'top',
        loadChildren: () =>
          import('./pages/top/top.module').then((m) => m.TopModule),
      },
      {
        path: 'sale',
        loadChildren: () =>
          import('./pages/sale/sale.module').then((m) => m.SaleModule),
      },
      {
        path: 'perfumery',
        loadChildren: () =>
          import('./pages/perfumery/perfumery.module').then((m) => m.PerfumeryModule),
      },
      {
        path: 'wine',
        loadChildren: () =>
          import('./pages/spirits-and-wine/spirits-and-wine.module').then((m) => m.SpiritsAndWineModule),
      },
    ],
    
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
