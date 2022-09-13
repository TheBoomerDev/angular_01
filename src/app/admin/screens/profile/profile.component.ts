import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user:User = new User();

  constructor() { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh = (): void => {
    this.user = User.generate();
  }

}
