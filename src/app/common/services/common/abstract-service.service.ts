import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base-service.service';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  url:string=environment.host

  constructor(public service:BaseService, public error: ErrorService) { }

  // CRUD
  public create = (obj:any) => {
    return this.service.doPost(this.url, obj)
    .catch((error: any) => {
      this.error.checkError(error)
    })
  }

  public list = () => {
    return this.service.doGet(this.url)
  }

  public details = (id:string) => {
    return this.service.doGet(this.url + '/' + id)
  }

  public edit = (id:string|undefined, obj:any) => {
    return this.service.doPut(this.url + '/' + id, obj)
    .catch((error: any) => {
      this.error.checkError(error)
    })
  }

  public remove = (id:string) => {
    return this.service.doDelete(this.url + '/' + id, {})
    .catch((error: any) => {
      this.error.checkError(error)
    })
  }
}
