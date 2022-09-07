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
    const user = localStorage.getItem('currentUser')
    const check = (user !== null)
    console.log('User is logged in: ' + user, check)
    return check
  }
}
