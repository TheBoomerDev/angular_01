import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract-service.service';
import { BaseService } from './common/base-service.service';

@Injectable({
  providedIn: 'root'
})
export class LinkService extends AbstractService{

  constructor(public override service: BaseService) {
    super(service);
    this.url = `${this.url}link`;
  }

}
