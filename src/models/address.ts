import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./User";

@Entity({name: "addreses"})
export class Address{
    @PrimaryGeneratedColumn()
    id:number;

    @Column({name:"name"})
    name:string;
}