import { Injectable } from '@angular/core';
import { AbstractService } from './common/abstract-service.service';
import { BaseService } from './common/base-service.service';
import { ErrorService } from './common/error.service';
import { ToastService } from './common/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(public override service: BaseService, private toast:ToastService,
    private error:ErrorService) {
    super(service);
    this.url = `${this.url}auth`;
  }

  login = (user: any) => {
    return new Promise((resolve, reject) => {

      const url = `${this.url}/login`
      this.service.doPost(url, user).then((data:any)=>{
        localStorage.setItem('currentUser', user)

        resolve(data)
      }).catch((error:any)=>{
        this.error.checkError(error)
        reject(error)

      })

    })
  }

  logout = () => {
    localStorage.removeItem('currentUser')
  }

  isLoged = ():boolean => {
    const user = localStorage.getItem('currentUser')
    const check = (user !== null)
    console.log('User is logged in: ' + user, check)
    return check
  }
}
