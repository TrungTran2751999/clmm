import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity({name: "ngan_hang"})
export class NganHang{
    @PrimaryGeneratedColumn()
    Id?:number;

    @Column({name:"PhoneNumber"})
    PhoneNumber?:string;

    @Column({name:"MaGD"})
    MaGD?:string;

    @Column({name:"TienCuoc"})
    TienCuoc?:number;

    @Column({name:"NoiDung"})
    NoiDung?:string;

    @Column({name:"KetQua"})
    KetQua?:boolean

    @Column({name:"CreatedAt"})
    CreatedAt?:Date

    // @OneToOne(()=>Address)
    // @JoinColumn({name:"address_id"})
    // address:Address
}