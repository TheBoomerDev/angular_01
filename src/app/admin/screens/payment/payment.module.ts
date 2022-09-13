import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DetailComponent } from './detail/detail.component';
import { ListComponent } from './list/list.component';
import { ModalComponent } from './modal/modal.component';
import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentComponent } from './payment.component';
import { ContentComponent } from './list/content/content.component';
import { FilterComponent } from './list/filter/filter.component';
import { ItemContentComponent } from './list/content/item-content/item-content.component';


@NgModule({
  declarations: [
    ListComponent,
    DetailComponent,
    ModalComponent,
    PaymentComponent,
    ContentComponent,
    FilterComponent,
    ItemContentComponent
  ],
  imports: [
    CommonModule,
    PaymentRoutingModule
  ],
  bootstrap:[PaymentComponent]
})
export class PaymentModule { }
