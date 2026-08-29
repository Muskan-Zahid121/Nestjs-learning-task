import { IsString, MinLength } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class LoginDto {
  @IsString()
  username: string;

  @IsString()
  @MinLength(8, { message: 'Password must be at least 8 characters long' })
  password: string;
}
