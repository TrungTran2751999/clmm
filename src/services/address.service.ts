import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Address } from "src/models/address";
import { Repository } from "typeorm";

@Injectable()
export class AdressService{
    constructor(
        @InjectRepository(Address)
        private addressRepository:Repository<Address>
    ){}
    findAll(){
        return this.addressRepository.find();
    }
}