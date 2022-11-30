import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
    signUp(){
        return {
            msg: "I have Signed Up!"
        };
    }

    signIn(){
        return {
            msg: "I have Signed In!"
        };
    }
}