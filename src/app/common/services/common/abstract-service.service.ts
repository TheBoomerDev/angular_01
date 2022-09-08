import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BaseService } from './base-service.service';

@Injectable({
  providedIn: 'root'
})
export class AbstractService {

  url:string=environment.host+'admin/'

  constructor(public service:BaseService) { }

  // CRUD

  public create = (obj:any) => {
    return this.service.doPost(this.url, obj)
  }

  public list = () => {
    return this.service.doGet(this.url)
  }

  public details = (id:string) => {
    return this.service.doGet(this.url + '/' + id)
  }

  public edit = (id:string, obj:any) => {
    return this.service.doPut(this.url + '/' + id, obj)
  }

  public remove = (id:string) => {
    return this.service.doDelete(this.url + '/' + id, {})
  }
}
