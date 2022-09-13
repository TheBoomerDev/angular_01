import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  @Input() user:User = new User();

  @Output() update = new EventEmitter<User>();

  constructor() { }

  ngOnInit(): void {
    this.refresh()
  }

  refresh = (): void => {
    this.user = User.generate();
  }

  updateData = (data:any) => {
    console.log('updateData', data)
    this.refresh()

    this.update.emit(data)
  }

}
