import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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

  constructor(private router: Router) {

  }

  ngOnInit(): void {

    const obj = {
      email: "hola@mundo.com",
      password:"Test1234"
    }
    this.form.patchValue(obj)

    this.form.valueChanges.subscribe((data) => {

      const ctrls = this.form.controls
      Object.keys(ctrls).forEach((ctrlName)=>{
        const errors = this.form.get(ctrlName)?.errors || []
        console.log(ctrlName, errors)

      })

    })
  }


  saveForm = () => {
    const values = this.form.value
    console.log('saveForm', values)

  }

   goRecovery =  () =>{
    this.router.navigate(['/auth/recovery']);
  }

}
