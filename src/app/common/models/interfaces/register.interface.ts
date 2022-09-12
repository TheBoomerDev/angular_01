import { UserLogin } from "./user.interface";

export interface UserRegister extends UserLogin {
    password_confirm:string;
}