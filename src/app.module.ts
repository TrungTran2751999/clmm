import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModel } from './modules/user.module';
import { UserEntity } from './models/User';
import { Address } from './models/address';
import { Client } from './models/Client';
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './controllers/user.controller';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "123456",
    database: "clmm",
    entities: [UserEntity, Address, Client],
    synchronize: true
  }), 
  UserModel,
  JwtModule.register({
    secret:"fjojsdofjsdofjsdlfjsdlfjsdflsd",
    signOptions: {
      expiresIn: '1d',
    }
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
