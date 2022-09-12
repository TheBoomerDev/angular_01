import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private toast:ToastrService, private translate: TranslateService) { }

  info = (title:string, subtitle:string) => {

    const i18Title = this.translate.instant(title);
    const i18Subtitle = this.translate.instant(subtitle);

    this.toast.info(i18Subtitle, i18Title)
  }

  error = (title:string, subtitle:string) => {

    const i18Title = this.translate.instant(title);
    const i18Subtitle = this.translate.instant(subtitle);

    this.toast.error(i18Subtitle, i18Title)
  }

}
