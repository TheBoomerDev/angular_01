import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../common/shared/shared.module';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MenuOptionsComponent } from './menu/menu-options/menu-options.component';
import { MenuComponent } from './menu/menu.component';
import { MenuProfileComponent } from './menu/profile/profile.component';
import { ProfileComponent } from './screens/profile/profile.component';


@NgModule({
  declarations: [
    AdminComponent,
    MenuComponent,
    ProfileComponent,
    MenuOptionsComponent,
    MenuProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ],
  bootstrap:[AdminComponent]
})
export class AdminModule { }
