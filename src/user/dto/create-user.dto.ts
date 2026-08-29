import { Transform } from "class-transformer";
import { IsBoolean, IsDate, IsEmail, IsEmpty, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateUserDto {
    readonly id:number;

    @IsNotEmpty({message:"First Name is required"})
    @IsString({message:"should be string"})
    firstName : string;



    @IsNotEmpty({message : "Last Name is required"})
    @IsString({message : "should be string"})
    lastName:string;


    @IsBoolean({ message: 'isActive must be a boolean value' })
    isActive: boolean;



    @IsNotEmpty({message : "Email is required"})
    @IsEmail({}, { message: "Invalid email format. Please enter a valid email address." })
    email : string ;


    
    @IsNotEmpty({message : "not empty"})
    @Transform(({ value }) => new Date(value))
    @IsDate({ message: ' Invalid date . Please enter a  valid date.' })
    Date : number;



    @IsNotEmpty ({message : "not empty"})
    @Transform(({ value }) => new Date(value))
    @IsDate({message : "Invalid DOb . Please enter a valid Date of birth"})
    DOB : number;
 


    @IsNotEmpty({ message: 'Password is required' })
    @IsString({message : 'must be string'})
    password: string;


    @IsNumber({}, { message: 'phone number must be a valid' })
    @IsNotEmpty({message : 'phone number is required'})
    phoneNumber : number;

}
