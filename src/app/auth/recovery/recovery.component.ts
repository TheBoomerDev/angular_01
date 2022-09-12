import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/common/services/auth.service';
import { ToastService } from 'src/app/common/services/common/toast.service';

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

  constructor(private router:Router, private service: AuthService,
    private toast:ToastService) { }

  ngOnInit(): void {
  }

  saveForm = (value:any) => {
    console.log('saveForm', value)
    this.service.recovery(value).then((data: any) => {

      const titleMsg    = 'recovery.toast_ok_title'
      const subTitleMsg = 'recovery.toast_ok_subtitle'
      this.toast.info(titleMsg, subTitleMsg)

    }).catch((err: any) => {
      console.error(err)
    })
  }

  doRecovery = () => {
    console.log('Recoveyr', this.email)
  }

  goLogin =  () =>{
    this.router.navigate(['/auth/login']);
  }

}
