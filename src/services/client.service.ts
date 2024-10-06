import { BadRequestException, Body, Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Client } from "src/models/Client";
import { Repository } from "typeorm";
import * as bscrypt from "bcrypt";
import { JwtService } from "@nestjs/jwt";
import { UserService } from "./user.service";
import { Response } from "supertest";
import { UserRes } from "src/models/dto/UserRes";

@Injectable()
export class ClientService{
    constructor(
        @InjectRepository(Client)
        private clientService:Repository<Client>,

        private jwtService:JwtService
    ){}
    async register(@Body() clientDTO:Client){
        try{
            clientDTO.password = await bscrypt.hash(clientDTO.password, 12);
            this.clientService.save(clientDTO);
        }catch{

        }
    }
    findByName(name:string):Promise<Client>{
        return this.clientService.findOne({
            where: {userName:name}
        })
    }
    async login(@Body() userLogin:UserRes, @Res({passthrough:true}) res:Response){
        let user = await this.findByName(userLogin.UserName);
        if(await !bscrypt.compare(userLogin.Password, user.password)){
            throw new BadRequestException(":)))) 400 nha")
        }
        const jwt = await this.jwtService.signAsync({id: user.id, name: user.userName}, { secret: `sdhsdlksjdlksjdslkjdslkdjslkd` })
        
        return jwt;
    }
}