import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract-service.service';
import { BaseService } from './common/base-service.service';
import { ErrorService } from './common/error.service';

@Injectable({
  providedIn: 'root'
})
export class LinkService extends AbstractService{

  constructor(public override service: BaseService, public override error:ErrorService) {
    super(service, error);
    this.url = `${this.url}link`;
  }

}
