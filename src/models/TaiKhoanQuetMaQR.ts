import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Address } from "./address";

@Entity({name: "tai_khoan_quet_qr"})
export class TaiKhoanQuetMaQR{
    @PrimaryGeneratedColumn()
    Id?:number;

    @Column({name:"MaQR"})
    MaQR?:string;

    @Column({name:"TenNguoiNhan"})
    TenNguoiNhan?:string;

    @Column({name:"Password"})
    NganHang?:number;

    @Column({name:"Status"})
    Status?:number;

    @Column({name:"CreatedAt"})
    CreatedAt?:Date

    @Column({name:"UpdatedAt"})
    UpdatedAt?:Date

    // @OneToOne(()=>Address)
    // @JoinColumn({name:"address_id"})
    // address:Address
}