import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent implements OnInit {

  email:string= ''

  public form: FormGroup = new FormGroup({
    email: new FormControl("user@email.com", [
      Validators.required,
      Validators.email,
      Validators.maxLength(150)
    ])
  })

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  saveForm = (value:any) => {
    console.log('saveForm', value)

  }

  doRecovery = () => {
    console.log('Recoveyr', this.email)
  }

  goLogin =  () =>{
    this.router.navigate(['/auth/login']);
  }

}
