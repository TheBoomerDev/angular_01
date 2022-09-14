import { Injectable } from '@angular/core';
import { UserRegister } from '../models/interfaces/register.interface';
import { UserLogin } from '../models/interfaces/user.interface';
import { AbstractService } from './common/abstract-service.service';
import { BaseService } from './common/base-service.service';
import { ErrorService } from './common/error.service';
import { SessionService } from './common/session.service';
import { ToastService } from './common/toast.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends AbstractService {

  constructor(private session: SessionService, public override service: BaseService, private toast: ToastService,
    public override error: ErrorService) {
    super(service, error);
    this.url = `${this.url}auth`;
  }

  private doPost = (url: string, data: any) => {
    return this.service.doPost(url, data)
  }

  recovery = (email: string) => {
    const url = `${this.url}/recovery`
    return this.doPost(url, email)
  }

  register = (user: UserRegister) => {
    const url = `${this.url}/register`
    return this.doPost(url, user).then((res: any) => {
      this.session.save(res.body.data)
    })
  }

  login = (user: UserLogin) => {
    const url = `${this.url}/login`
    return this.doPost(url, user).then((res: any) => {
      this.session.save(res.body.data)
    })
  }

  logout = () => {
    this.session.logOut()
  }


}
