import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login = (user: any) => {
    localStorage.setItem('currentUser', user)
  }

  logout = () => {
    localStorage.removeItem('currentUser')
  }

  isLoged = ():boolean => {
    return (localStorage.getItem('currentUser') !== null)
  }
}
