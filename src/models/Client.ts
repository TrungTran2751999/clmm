import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Client{
    @PrimaryGeneratedColumn({})
    id:number

    @Column({name:"user_name"})
    userName:string

    @Column({name:"password"})
    password:string
}