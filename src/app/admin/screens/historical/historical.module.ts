import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HistoricalRoutingModule } from './historical-routing.module';
import { HistoricalComponent } from './historical.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    HistoricalComponent,
    ModalComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    HistoricalRoutingModule
  ],
  bootstrap:[HistoricalComponent]
})
export class HistoricalModule { }
