import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastService } from './toast.service';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor( private router: Router,
    private translate: TranslateService, private toast: ToastService) { }

  checkError = (data: any):void => {

    const msg = data.error.message || data.message || data

    const i18nError = this.translate.instant(`error.${msg}`)

    if (i18nError.toLowerCase().includes('token')){
      this.router.navigate(['/auth/login'])
    }

    if (i18nError.includes('error.')){
      this.toast.error('Error', msg)
    }else{
      this.toast.error('Error', i18nError)
    }


  }


}
