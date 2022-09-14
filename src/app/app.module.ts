import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './common/shared/shared.module';
import { InicioComponent } from './inicio/inicio.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}
const JWT_Module_Options: JwtModuleOptions = {
  config: {
    tokenGetter: tokenGetter,
  }
};
@NgModule({
  declarations: [
    AppComponent,
    InicioComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    SharedModule,
    JwtModule.forRoot(JWT_Module_Options),
    TranslateModule.forRoot({
      defaultLanguage: 'en'
    }),
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      maxOpened: 2,
      autoDismiss: true,
      timeOut: 1000,
      positionClass: 'toast-top-right',
      progressAnimation: 'decreasing'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
