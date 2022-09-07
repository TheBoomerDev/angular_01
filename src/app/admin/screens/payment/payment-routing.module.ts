import { DetailComponent } from './detail/detail.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { PaymentComponent } from './payment.component';

const children: Routes = [
  { path: 'detail/:id', component: DetailComponent },
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'list' }
];

const routes: Routes = [
  { path: '', component: PaymentComponent, children: [...children] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaymentRoutingModule { }
