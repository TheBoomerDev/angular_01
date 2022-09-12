import { User } from "./user.model";

export class UserAdmin extends User {

    email: string = '';
    password: string = '';
    password_confirm: string = '';
}