import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { RegisterComponent } from './register/register.component';

import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FlexLayoutModule,
    MatCardModule
  ],
  bootstrap: [AuthComponent]
})
export class AuthModule { }
