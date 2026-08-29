import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import {  User } from './user/entities/user.entity';
import { OrderModule } from './order/order.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'testdb',
    entities: [User],
    synchronize: true,
    autoLoadEntities: true,
  }),
    UserModule,
    OrderModule,
    UsersModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService, UsersService],
})
export class AppModule {}
