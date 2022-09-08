import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/common/shared/shared.module';

import { LinksRoutingModule } from './links-routing.module';
import { LinksComponent } from './links.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    LinksComponent,
    ListComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LinksRoutingModule,
    SharedModule
  ],
  bootstrap: [LinksComponent]
})
export class LinksModule { }
