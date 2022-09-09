export class LinkModel {
    _id?       : string;
    createdAt? : Date;
    updatedAt? : Date;
    urlOriginal: string='';
    code?      : string;


    private static genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    private static staticItems:LinkModel[] = []
    public static getMocks = ():LinkModel[] => {
        if (this.staticItems.length > 0) return this.staticItems

        this.staticItems = []
        for (let i = 0; i < 100; i++) {
            this.staticItems.push(this.generate())
        }

        return this.staticItems
    }

    private static generate = (): LinkModel =>{
        let item = new LinkModel()
        // Random id
        item._id = this.genRanHex(12)

        // Random Created
        item.createdAt = new Date()
        item.updatedAt = new Date()
        let randomDate = item.createdAt.getDate() - Math.floor(Math.random() * 30)
        item.createdAt.setDate(randomDate)
        randomDate = item.updatedAt.getDate() - Math.floor(Math.random() * 30)
        item.updatedAt.setDate(randomDate)

        item.urlOriginal  = this.genRanHex(12) + ' ' + this.genRanHex(12) + ' ' + this.genRanHex(12)

        // Description and Service Code
        item.code = this.genRanHex(7)

        return item
    }

}