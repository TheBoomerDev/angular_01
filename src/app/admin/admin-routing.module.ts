import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './screens/profile/profile.component';

const children: Routes = [
  { path: 'links',
    loadChildren: () => import('./screens/links/links.module').then(m => m.LinksModule)},
  { path: 'historical',
    loadChildren: () => import('./screens/historical/historical.module').then(m => m.HistoricalModule)},
  { path: 'payment',
    loadChildren: () => import('./screens/payment/payment.module').then(m => m.PaymentModule)},
  { path: 'profile', component: ProfileComponent },
  { path: '**', redirectTo: 'profile' }
];

const routes: Routes = [
  { path: '', component: AdminComponent, children: [...children] },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
