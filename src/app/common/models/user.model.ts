export class User{
    _id?      : string;
    createdAt?: Date;
    updatedAt?: Date;
    birthdate?: Date; // > 18 años
    status?   : boolean; // Bloqueado O NO
    country?  : string; // https://en.wikipedia.org/wiki/List_of_ISO_3166_country_codes
}