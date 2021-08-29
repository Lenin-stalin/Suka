import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfumeryComponent } from './components/perfumery.component';


const routes: Routes = [
  {
    path: '',
    component: PerfumeryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerfumeryRoutingModule { }