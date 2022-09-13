import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  @Input() user_profile:User = new User();

  constructor() { }

  ngOnInit(): void {
  }

}
