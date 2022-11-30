import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";

@Injectable()
export class AuthService {
    constructor(private prisma: PrismaService){}

    signUp(dto: AuthDto){
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