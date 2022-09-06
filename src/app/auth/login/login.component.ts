import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email:string=''

  public form: FormGroup = new FormGroup({
    email: new FormControl("user@email.com", [
      Validators.required,
      Validators.email,
      Validators.maxLength(150)
    ]),
    password: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150)
    ])
  })

  constructor() {

  }

  ngOnInit(): void {

    const obj = {
      email: "hola@mundo.com",
      password:"Test1234"
    }
    this.form.patchValue(obj)
  }


  saveForm = () => {
    const values = this.form.value
    console.log('saveForm', values)

  }

}
