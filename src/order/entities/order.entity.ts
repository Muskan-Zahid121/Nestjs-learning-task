import { User } from "src/user/entities/user.entity";
import { Column, OneToOne, PrimaryGeneratedColumn } from "typeorm";

export class Order {
    @PrimaryGeneratedColumn()
    id:number;
    
}
