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

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(private service: Service) {
   this.updateTable()
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
    }).finally(() => {
      this.updateTable()
    })

  }

  private updateTable = () => {
    this.dataSource = new MatTableDataSource(this.items)
    this.dataSource.paginator = this.paginator
  }

  create = () => {

  }

}
