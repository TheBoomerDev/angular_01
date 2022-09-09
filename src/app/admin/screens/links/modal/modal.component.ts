import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkModel } from 'src/app/common/models/link.model';
import { Service } from '../service.service';

@Component({
  selector: 'modal-links',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

  title: string = 'NUEVO'
  item: LinkModel = new LinkModel()

  form: FormGroup = new FormGroup({
    code: new FormControl('', Validators.required),
    urlOriginal: new FormControl('', Validators.required)
  })

  constructor(private service:Service, public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

    console.log('DATA Modal', data)

    if (data) {
      const item = data['item']
      if (item) {
        this.item = item
        this.title = 'Editar'
        this.form.patchValue(item)
      }
    }

  }

  save = () => {
    const values = this.form.value
    this.service.save(values).then(data=>{
      this.doClose()
    })
  }

  doClose = () => {
    this.dialogRef.close('CERRADO')
  }

}
