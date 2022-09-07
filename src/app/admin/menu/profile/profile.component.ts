import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class MenuProfileComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
