import { Component, OnInit } from '@angular/core';
import { LinkService } from 'src/app/common/services/link-service.service';

@Component({
  selector: 'list-links',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private service:LinkService) { }

  ngOnInit(): void {
    this.service.list().then((data:any)=>{

    }).catch((error:any)=>{

    }).finally(()=>{

    })
  }

}
