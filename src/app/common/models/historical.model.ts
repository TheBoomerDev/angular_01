import { LinkModel } from "./link.model";
export class Historical{
    _id?           : string;
    createdAt?     : Date;
    updatedAt?     : Date;
    idLink?        : string;
    ip?            : string;
    country?       : string;
    osSystem?      : string;
    osVersion?     : string;
    browser?       : string;
    browserVersion?: string;

    public static compare = (a:Historical, b:Historical): number => {
        if (!a || !b || !a.country || !b.country) return 0;
        if (a.country < b.country) return -1
        else return 1;
    };

    private static genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    private static getRandomNumber = (min:number, max:number) => {
        return min + Math.floor(Math.random() * max)
    }

    private static staticItems:Historical[] = []
    public static getMocks = ():Historical[] => {
        if (this.staticItems.length > 0) return this.staticItems

        this.staticItems = []
        for (let i = 0; i < 100; i++) {
            this.staticItems.push(this.generate())
        }

        return this.staticItems
    }

    private static generate = (): Historical =>{
        let item = new Historical()
        // Random id
        item._id = this.genRanHex(12)

        // Random Created
        item.createdAt = new Date()
        item.updatedAt = new Date()
        let randomDate = item.createdAt.getDate() - Math.floor(Math.random() * 30)
        item.createdAt.setDate(randomDate)
        randomDate = item.updatedAt.getDate() - Math.floor(Math.random() * 30)
        item.updatedAt.setDate(randomDate)

        const linkMocks = LinkModel.getMocks()
        const randomLinkModel = linkMocks[ Math.floor(Math.random() * linkMocks.length)  ]

        item.idLink = randomLinkModel._id

        item.ip = `${Historical.getRandomNumber(1,255)}.${Historical.getRandomNumber(1,255)}.${Historical.getRandomNumber(1,255)}.${Historical.getRandomNumber(1,255)}`

        item.country = this.genRanHex(3)

        const osArray = ['Windows', 'Android', 'Iphone', 'Linux', 'Mac']
        item.osSystem = osArray[ Math.floor(Math.random() * osArray.length) ]

        item.osVersion = this.genRanHex(12)

        const brArray = ['Chrome', 'Edge', 'IE10', 'IE6', 'Opera', 'Firefox']
        item.browser = brArray[ Math.floor(Math.random() * brArray.length) ]

        item.browserVersion = this.genRanHex(12)

        return item
    }


}