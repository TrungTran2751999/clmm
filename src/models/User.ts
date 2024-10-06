import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity({name: "users"})
export class UserEntity{
    @PrimaryGeneratedColumn()
    ID?:number;

    @Column({name:"UserName"})
    UserName?:string;

    @Column({name:"FullName"})
    FullName?:string;

    @Column({name:"Password"})
    Password?:string;

    @Column({name:"CreatedAt"})
    CreatedAt?:Date = null

    @Column({name:"UpdatedAt"})
    UpdatedAt?:Date = null

    // @OneToOne(()=>Address)
    // @JoinColumn({name:"address_id"})
    // address:Address
}