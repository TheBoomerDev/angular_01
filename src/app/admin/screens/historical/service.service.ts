import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Historical } from 'src/app/common/models/historical.model';
import { HistoricalServic } from 'src/app/common/services/historical.service';
import { DeleteDialogComponent } from 'src/app/common/shared/delete-dialog/delete-dialog.component';
import { ModalComponent } from './modal/modal.component';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private service: HistoricalServic, private dialog: MatDialog) { }


  public list = (): Promise<Historical[]> => {
    return new Promise((resolve, reject) => {

      // TODO: FIXME: Quitar esto para que coja de la petición
      if (true) {
        resolve(Historical.getMocks());
      }


      this.service.list().then(data => {
        resolve(data as Historical[]);
      }).catch(err => {
        reject(err)
      })
    })
  }

  public save = (item: Historical) => {
    const isNew = (!item._id)

    return new Promise((resolve, reject) => {
      if (isNew) {
        this.service.create(item).then((data) => {
          resolve(data as Historical[])
        }).catch((err: any) => {
          reject(err)
        })
      } else {
        this.service.edit(item._id, item).then((data: any) => {
          resolve(data)
        }).catch((err: any) => {
          reject(err)
        })
      }
    })

  }

  public remove = (item: Historical) => {

    return new Promise((resolve, reject) => {

      const dialog = this.dialog.open(DeleteDialogComponent, {
        width: "25%",
        data: {
          item: item
        }
      })
      dialog.disableClose = true
      dialog.afterClosed().subscribe(removeItem => {

        if (!removeItem) resolve(null)

        const id = item._id as string
        this.service.remove(id).then((data: any) => {
          console.log('Data', data)
          resolve(data)
        }).catch((err: any) => {
          console.error(err)
          reject(err)
        })


      })

    })




  }

  openModal = (item: Historical | null, callback: () => void) => {

    const dialog = this.dialog.open(ModalComponent, {
      width: "75%",
      data: {
        item: item
      }
    })

    dialog.afterClosed().subscribe(data => {
      console.log('Data', data)
      callback()
    })

  }

}
