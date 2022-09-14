import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SessionService } from './session.service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private client: HttpClient, private session: SessionService) { }

  options: any = {}
  public setOptions = (params: any = null) => {
    let token = this.session.getToken()
    let headers = new HttpHeaders();
    if (token) {
      headers = headers.append('X-ACCESS_TOKEN', token);
    }
    this.options = {
      headers: headers,
      observe: 'response'
    };
    return this.options;
  };

  public doGet = (url: string, opts=this.setOptions()) => {

    return new Promise((resolve, reject) => {

      this.client.get(url, opts).subscribe({
        next: (data: any) => {
          resolve(data)
        },
        error: (error: any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doPost = (url: string, body: any, opts=this.setOptions()) => {

    return new Promise((resolve, reject) => {

      this.client.post(url, body, opts).subscribe({
        next: (data: any) => {
          resolve(data)
        },
        error: (error: any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doPut = (url: string, body: any, opts=this.setOptions()) => {

    return new Promise((resolve, reject) => {

      this.client.put(url, body, opts).subscribe({
        next: (data: any) => {
          resolve(data)
        },
        error: (error: any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doDelete = (url: string, opts=this.setOptions()) => {

    return new Promise((resolve, reject) => {

      this.client.delete(url, opts).subscribe({
        next: (data: any) => {
          resolve(data)
        },
        error: (error: any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

}
