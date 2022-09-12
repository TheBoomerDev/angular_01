export interface UserLogin{
    email:string;
    password:string;

    loginWith(email:string, password:string):void;
}