import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import packageInfo from '../../package.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testWeb';

  version:string = environment.version
  version_package:string = packageInfo.version

  constructor(private translate: TranslateService){
    this.translate.use('en');
  }
}
