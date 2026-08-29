import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private abcRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User();
    user.firstName = createUserDto.firstName;
    user.lastName = createUserDto.lastName;
    user.isActive = true;
    user.email = createUserDto.email;
    user.Date = createUserDto.Date;
    user.DOB = createUserDto.DOB;
    user.password = createUserDto.password;
    user.phoneNumber = createUserDto.phoneNumber;

    try {
      const savedUser = await this.abcRepository.save(user);
      return {
        data: savedUser,
        message: 'User created successfully',
      };
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        throw new BadRequestException('Email already exists. Please use a different email.');
      }
      throw new BadRequestException('An error occurred while creating the user.');
    }
  }

  getHello(): string {
    return 'This action returns a hello message from user service';
  }

  findAll() {
    return `This action returns all users`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  edit(id: number) {
    return `This action edits a #${id} user`;
  }
}
