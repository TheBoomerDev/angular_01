import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from '../common/services/common/toast.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  constructor(private router:Router, private toast: ToastService) { }

  ngOnInit(): void {
    this.toast.info('Hola', 'Mundo')
  }

  goLogin = () =>{
    this.router.navigate(['/auth/login'])
  }

  goRegister = () =>{
    this.router.navigate(['/auth/register'])
  }

}
