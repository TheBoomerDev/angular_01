import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Historical } from 'src/app/common/models/historical.model';
import { Service } from '../service.service';

@Component({
  selector: 'list-historical',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  items: Historical[] = []

  displayedColumns: string[] = ['createdAt', 'code', 'urlOriginal', 'actions'];
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
      this.items = data as Historical[]
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

  edit = (item: Historical|null) => {
    // Llamado Listener o Callback
    const callback = () => {
      this.refresh()
    }
    this.service.openModal(item, callback)
  }

  create = () => {
    this.edit(null)
  }

  delete = (item: Historical) => {
    this.service.remove(item).then((data) => {
      this.refresh()
    }).catch((error) => {
      console.error(error)
    })
  }
}
