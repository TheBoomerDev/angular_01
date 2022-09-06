import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public formGroup: FormGroup = LoginComponent.initForm();

  constructor() { }

  ngOnInit(): void {
    this.formGroup = LoginComponent.initForm();
  }

  static initForm = (): FormGroup => {
    const group = {
      name: new FormControl("", [
        Validators.required,
        Validators.maxLength(150)
      ]),
      password: new FormControl("", [
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(150)
      ])
    }
    return new FormGroup(group)
  }

  saveForm = () => {

  }

}
