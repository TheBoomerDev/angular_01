import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'profile-pass',
  templateUrl: './profile-pass.component.html',
  styleUrls: ['./profile-pass.component.scss']
})
export class ProfilePassComponent implements OnInit {

  usuario:User = new User()

  @Input('dameDatos')
  set dameDatos(user:User) {
    this.usuario = user;
    // Como es una función podemos reacccionar y provocar los cambios que queramos
    console.log('user_profile', user)
  }
  get dameDatos():User {
    return this.usuario
  }


  constructor() { }

  ngOnInit(): void {
  }


  save = () => {

  }

}
