import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoricalComponent } from './historical.component';
import { ListComponent } from './list/list.component';

const children: Routes = [
  { path: 'list', component: ListComponent },
  { path: '**', redirectTo: 'list' }
];

const routes: Routes = [
  { path: '', component: HistoricalComponent, children: [...children] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HistoricalRoutingModule { }
