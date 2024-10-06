import { BadRequestException, Body, Injectable, Res } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Column, Entity, EntityManager, PrimaryGeneratedColumn, Repository } from "typeorm";
import { UserEntity } from "../models/User";
import { Address } from "src/models/address";
import { AdressService } from "./address.service";
import { ClientService } from "./client.service";
import { UserRes } from "src/models/dto/UserRes";
import { JwtService } from "@nestjs/jwt";
import * as bscrypt from "bcrypt";
@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private userRepository:Repository<UserEntity>,

        @InjectRepository(Address)
        private addressRepository:Repository<Address>,

        private addressService:AdressService,

        private jwtService:JwtService,

        private entityManager:EntityManager
        
    ){}
    findAll():Promise<UserEntity[]>{
        //return this.userRepository.find({relations:["address"]})
        //return this.entityManager.query("SELECT Id as iddd FROM users");
        return this.userRepository.find();
    }
    findOne(id:number):Promise<any>{
        return this.userRepository.query("SELECT * FROM users WHERE id=?",[id])
    }
    findByName(name:string):Promise<UserEntity>{
        return this.userRepository.query("SELECT * FROM users WHERE UserName=? LIMIT 1",[name])
    }
    createUser(user:UserEntity):Promise<UserEntity>{
        return this.userRepository.save(user)
    }
    async update(id:number, user:UserEntity){
        await this.userRepository.update(id, user)
    }
    async remove(id:number):Promise<void>{
        await this.userRepository.delete(id)
    }
    findAllAddress():Promise<Address[]>{
        return this.addressRepository.find()    
    }
    findAllAddressService():Promise<Address[]>{
        return this.addressService.findAll();
    }
    async login(userLogin:UserRes){
        let user = await this.findByName(userLogin.UserName);
        user = user[0]
        if(!user) throw new BadRequestException(":)))) 400 nha")
        if(await !bscrypt.compareSync(userLogin.Password, user.Password)){
            throw new BadRequestException("sai cmn mk")
        }
        const jwt = await this.jwtService.signAsync({id: user.ID, name: user.UserName}, { secret: `sdhsdlksjdlksjdslkjdslkdjslkd` })
        
        return jwt;
    }
    async register(userRes:UserRes){
        userRes.Password = await bscrypt.hash(userRes.Password, 12);
        let userEn = new UserRes().toUserEntity(userRes);
        this.createUser(userEn);
    } 
}
