import { Injectable } from '@angular/core';
import { LinkService } from 'src/app/common/services/link-service.service';
import { LinkModel } from './../../../common/models/link.model';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private service:LinkService) { }

  public list = ():Promise<LinkModel[]> => {
    return new Promise((resolve, reject) => {

      // TODO: FIXME: Quitar esto para que coja de la petición
      if (true){
        resolve(LinkModel.getMocks());
      }


      this.service.list().then(data=>{
        resolve(data as LinkModel[]);
      }).catch(err=>{
        reject(err)
      })
    })
  }

  public save = (item:LinkModel) => {
    const isNew = (!item._id)

    return new Promise((resolve, reject) => {
      if (isNew) {
        this.service.create(item).then((data)=>{
          resolve(data as LinkModel[])
        }).catch((err:any)=>{
          reject(err)
        })
      }else{
        this.service.edit(item._id, item).then((data:any)=>{
          resolve(data)
        }).catch((err:any)=>{
          reject(err)
        })
      }
    })

  }

  public remove = (item: LinkModel) => {
    return new Promise((resolve, reject) => {
        const id = item._id as string
        this.service.remove(id).then((data:any) => {
            console.log('Data', data)
            resolve(data)
        }).catch((err:any) => {
            console.error(err)
            reject(err)
        })
    })
}

}
