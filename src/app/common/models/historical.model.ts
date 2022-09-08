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


}