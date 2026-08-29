import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './user/dto/create-user.dto';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AppService {

  getHello(): string {
    return 'first test route function';
  }

  getNest () : string {
    return 'Nest.js'
  }

  updateWorld() : string {
    return "world"
  }

  findAll() {
    return 'This action returns all user';
  }

  findOne(id : number) {
    return `This action returns a #${id} user`;
  }

  update(id : number) {
    return `this action updates the #${id} user`;
  }

  delete(id: number) {
    return `this action deletes the #${id} user`;
  }


}
