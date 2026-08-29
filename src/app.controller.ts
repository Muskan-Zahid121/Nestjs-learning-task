import { Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('app-route')
  getHello(){
    return this.appService.getHello();
  }

  @Get('update-app-route')
  updateWorld() {
    return this.appService.updateWorld();
  }

  @Get('all-id:id')
  find() {
    return this.appService.findAll();
  }

  @Get('get-one-id:id')
  findOne(@Param('id')  id: string) {
    return this.appService.findOne(+id);
  }

  @Patch ('update-app-id:id')
  update( id: number) {
    return this.appService.update(id)
  }


  @Delete('delete-id:id')
  delete (id : number) {
    return this.appService.delete(id)
  }


  @Get ('get-nest')
  getNest() {
    return this.appService.getNest();
  }


}
