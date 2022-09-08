import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { LinkModel } from 'src/app/common/models/link.model';
import { Service } from '../service.service';

@Component({
  selector: 'list-links',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: LinkModel[] = []

  displayedColumns: string[] = ['createdAt', 'code', 'urlOriginal'];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @ViewChild(MatPaginator) paginator: MatPaginator = {} as MatPaginator;
  @ViewChild(MatSort) sort: MatSort = {} as MatSort;

  constructor(private service: Service) {
    this.dataSource = new MatTableDataSource(this.items)
    this.dataSource.sort = this.sort
    this.dataSource.paginator = this.paginator
  }

  ngOnInit(): void {
    this.refresh()
  }

  private refresh = () => {

    this.service.list().then((data) => {
      // Castear
      this.items = data as LinkModel[]
    }).catch((error) => {
      console.error(error)
    })

  }

}
