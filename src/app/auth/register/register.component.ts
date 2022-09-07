import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  isPasswordChecked: boolean = false
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
    ]),
    password_confirm: new FormControl("", [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(150)
    ])
  })

  constructor(private router: Router, private service: AuthService) {

  }

  ngOnInit(): void {
    this.checkPassConfirm()
  }

  checkPassConfirm = () => {
    this.form.valueChanges.subscribe((data) => {

      const pass = data['password'] || ''
      const passConfirm = data['password_confirm'] || ''
      this.isPasswordChecked = (pass === passConfirm)
      console.log(data, pass, passConfirm, (pass === passConfirm), (pass == passConfirm))
    })
  }

  saveForm = () => {
    const values = this.form.value
    console.log('saveForm', values)
    this.service.login(values)
    this.router.navigate(['/admin'])
  }

  goRecovery = () => {
    this.router.navigate(['/auth/recovery']);
  }

  goLogin = () => {
    this.router.navigate(['/auth/login'])
  }

}
