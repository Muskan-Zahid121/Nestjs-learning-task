import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthenticationGuard } from 'src/guards/authentication.guard';
import { UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}


  @UseGuards(AuthenticationGuard)
  @Get('user-hello')
  getHello() {
    return this.userService.getHello();
  }

  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto);
  }


  @Post('get-user-route')
  findAll() {
    return this.userService.findAll();
  }

  @Get('user-find-one')
  findOne(@Param('id') id: number) {
    return this.userService;
  }

  @Patch('user:id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete('delete-user:id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }

  
  @Get('edit-id:id') 
  edit(id :  number) {
    return this.userService.edit(id);
  }

}
