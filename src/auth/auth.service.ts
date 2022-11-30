import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
    constructor(private prisma: PrismaService){}

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