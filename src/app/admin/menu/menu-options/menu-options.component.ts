import { Component, OnInit } from '@angular/core';

import menu from './menu.json';

@Component({
  selector: 'menu-options',
  templateUrl: './menu-options.component.html',
  styleUrls: ['./menu-options.component.scss']
})
export class MenuOptionsComponent implements OnInit {

  menuOptions:any = menu

  constructor() { }

  ngOnInit(): void {
  }

}
