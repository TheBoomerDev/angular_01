import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { UserLogin } from './../../common/models/interfaces/user.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


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

  constructor(private router: Router, private service: AuthService) {

  }

  ngOnInit(): void {

    const obj = {
      email: "hola@mundo.com",
      password: "Test1234"
    }
    this.form.patchValue(obj)

    this.form.valueChanges.subscribe((data) => {

      const ctrls = this.form.controls
      Object.keys(ctrls).forEach((ctrlName) => {
        console.log('FORM', this.form.get(ctrlName))
        const errors = this.form.get(ctrlName)?.errors || []
        console.log(ctrlName, errors)

      })

    })
  }

  saveForm = () => {
    const values = this.form.value  as UserLogin
    console.log('saveForm', values)
    this.service.login(values).then((data: any) => {
      this.router.navigate(['/admin'])
    }).catch((err: any) => {
      console.error(err)
    })

  }

  goRecovery = () => {
    this.router.navigate(['/auth/recovery']);
  }

  goRegister = () => {
    this.router.navigate(['/auth/register']);
  }

}
