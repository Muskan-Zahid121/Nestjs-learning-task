import { Order } from "src/order/entities/order.entity";
import { text } from "stream/consumers";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity() 
export class User {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;


    @Column({unique : true})
    email: string;

    @Column({type : 'date'})
    Date : number


    @Column({type : 'date'})
    DOB : number


    @Column({length : 12})
    password: string;


    @Column({nullable : true})
    phoneNumber : number;


}





