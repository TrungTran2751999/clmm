import { Module } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "../models/User";
import { UserController } from "../controllers/user.controller";
import { Address } from "src/models/address";
import { AdressService } from "src/services/address.service";
import { ClientService } from "src/services/client.service";
import { Client } from "src/models/Client";
import { JwtService } from "@nestjs/jwt";

@Module({
    imports:[TypeOrmModule.forFeature([UserEntity, Address, Client])],
    controllers:[UserController],
    providers:[UserService, AdressService, ClientService, JwtService],
})
export class UserModel{}