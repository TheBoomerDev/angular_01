import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkModel } from 'src/app/common/models/link.model';

@Component({
  selector: 'modal-links',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  title:string = 'NUEVO'
  item:LinkModel = new LinkModel()

  constructor(public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      console.log('DATA Modal', data)

      if (data){
        const item = data['item']
        if (item){
          this.item = item
          this.title = 'Editar'
        }
      }

  }

  doClose = () => {
    this.dialogRef.close('CERRADO')
  }

}
