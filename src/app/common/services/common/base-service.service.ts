import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(private client:HttpClient) { }

  public doGet = (url:string) => {

    return new Promise((resolve, reject) => {

      this.client.get(url).subscribe({
        next: (data:any) => {
          resolve(data)
        },
        error: (error:any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doPost = (url:string, body:any) => {

    return new Promise((resolve, reject) => {

      this.client.post(url, body).subscribe({
        next: (data:any) => {
          resolve(data)
        },
        error: (error:any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doPut = (url:string, body:any) => {

    return new Promise((resolve, reject) => {

      this.client.put(url, body).subscribe({
        next: (data:any) => {
          resolve(data)
        },
        error: (error:any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

  public doDelete = (url:string, body:any) => {

    return new Promise((resolve, reject) => {

      this.client.delete(url, body).subscribe({
        next: (data:any) => {
          resolve(data)
        },
        error: (error:any) => {
          reject(error)
        },
        complete: () => {

        }
      })

    })
  }

}
