import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";

@Injectable()
export class AuthService {
    constructor (
        private usersService: UsersService,
        private JwtService: JwtService
    ){}
   
   
    async signIn(signInDto): Promise<any> {
        const user = await this.usersService.findOne(signInDto.username);
        console.log('User found:', user);
      
        if (user.password !== signInDto.password) {
          throw new UnauthorizedException();
        }
      
        const payload = { sub: user.userId, username: user.username };
        return {
          access_token: await this.JwtService.signAsync(payload),
        };
      }
      
}