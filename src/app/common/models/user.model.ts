export class User{
    _id?      : string;
    createdAt?: Date;
    updatedAt?: Date;
    birthdate?: Date;     // > 18 años
    name?     : string;
    status?   : boolean;  // Bloqueado O NO
    country?  : string;   // https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes


    private pruebaPrivada = (): void => {}
    pruebaPackage = (): void => {}
    public pruebaPublic = (): void => {}
    protected pruebaProtected = (): void => {}

    static pruebaStatic = (): void => {}

    private static genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');

    public static generate = (): User =>{
        let item = new User()
        // Random id
        item._id = this.genRanHex(12)

        // Random Created
        item.createdAt = new Date()
        item.updatedAt = new Date()
        let randomDate = item.createdAt.getDate() - Math.floor(Math.random() * 30)
        item.createdAt.setDate(randomDate)
        randomDate = item.updatedAt.getDate() - Math.floor(Math.random() * 30)
        item.updatedAt.setDate(randomDate)

        item.birthdate = new Date()
        randomDate = item.birthdate.getDate() - Math.floor(Math.random() * 3000)
        item.birthdate.setDate(randomDate)

        item.status = (( Math.random() * 100) < 50)

        item.country = this.genRanHex(3)

        item.name = this.genRanHex(20)

        return item
    }

}