import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { User , userSchema } from './users.entity'
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepositorie } from './users.repositorie';

@Module({
  controllers: [UsersController],
  providers:[UsersService , UserRepositorie],
  imports: [MongooseModule.forFeature([{ name: User.name, schema: userSchema }])],
})
export class UsersModule {}
  