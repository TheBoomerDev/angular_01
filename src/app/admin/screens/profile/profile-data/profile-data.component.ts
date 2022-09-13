import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'profile-data',
  templateUrl: './profile-data.component.html',
  styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {

  @Input() user_profile:User = new User();

  @Output() update = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
  }

  pideActualizar = () => {
    this.update.emit(this.user_profile)
  }

}
