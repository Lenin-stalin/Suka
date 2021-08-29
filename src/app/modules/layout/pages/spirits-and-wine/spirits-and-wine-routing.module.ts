import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpiritsAndWineComponent } from './components/spirits-and-wine.component';


const routes: Routes = [
  {
    path: '',
    component: SpiritsAndWineComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WineRoutingModule { }