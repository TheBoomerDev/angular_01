import { Injectable } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  jwtHelper = new JwtHelperService();
  projectToken: string = environment.project

  constructor() { }

  save = (userToken: string) => {
    localStorage.setItem('currentUser', userToken)
  }

  logOut = () => {
    localStorage.removeItem('currentUser')
  }

  isLoged = (): boolean => {

    const token = localStorage.getItem('currentUser')
    // No tenemos token
    if (!token) return false

    // No es un token valido o ha caducado
    if (this.jwtHelper.isTokenExpired(token)) {
      return false
    }

    // Ha caducado la sesión
    const currentTime = new Date()
    const expDate = this.jwtHelper.getTokenExpirationDate(token)
    if (!expDate ||  expDate < currentTime) return false

    // Tenemos datos correctos en el Token
    const payload = this.jwtHelper.decodeToken(token);
    return (payload !== null)
  }

  getProfile = async (userToken: string) => {

    return new Promise(async (resolve, reject) => {

      const token = localStorage.getItem('currentUser')
      if (!token) {
        return reject(null);
      }

      if (this.jwtHelper.isTokenExpired(token)) {
        return reject(null);
      }

      const payload = this.jwtHelper.decodeToken(token);

      /* // Esto se suele usar para verificar que es del proyecto.
      if (!payload.proyect || payload.proyect !== this.projectToken) {
        return reject(null);
      }
      //*/

      resolve(payload);
    })


  }

}
