import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ProfileComponent } from './screens/profile/profile.component';

const children: Routes = [
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
