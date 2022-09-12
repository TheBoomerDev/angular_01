import { Injectable } from '@angular/core';
import { UserRegister } from '../models/interfaces/register.interface';
import { UserLogin } from '../models/interfaces/user.interface';
import { AbstractService } from './common/abstract-service.service';
import { BaseService } from './common/base-service.service';
import { ErrorService } from './common/error.service';
import { ToastService } from './common/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(public override service: BaseService, private toast: ToastService,
    private error: ErrorService) {
    super(service);
    this.url = `${this.url}auth`;
  }

  private doPost = (url: string, data: any) => {
    return this.service.doPost(url, data)
      .catch((error: any) => {
        this.error.checkError(error)
      })
  }

  recovery = (email: string) => {
    const url = `${this.url}/recovery`
    return this.doPost(url, email)
  }

  register = (user: UserRegister) => {
    const url = `${this.url}/register`
    return this.doPost(url, user).then((data: any) => {
      localStorage.setItem('currentUser', data)
    })
  }

  login = (user: UserLogin) => {
    const url = `${this.url}/login`
    return this.doPost(url, user).then((data: any) => {
      localStorage.setItem('currentUser', data)
    })
  }

  logout = () => {
    localStorage.removeItem('currentUser')
  }

  isLoged = (): boolean => {
    const user = localStorage.getItem('currentUser')
    const check = (user !== null)
    console.log('User is logged in: ' + user, check)
    return check
  }
}
