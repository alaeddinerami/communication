import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { User , userSchema } from './users.entity'
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepositorie } from './users.repositorie';
import { UsersService } from './users.service';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule , ConfigService } from '@nestjs/config';


@Module({
  controllers: [UsersController],
  providers:[UsersService , UserRepositorie],

  imports: [  
    ConfigModule ,
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]) ,
    

    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '2h' },
      }),
    }),
    
    ],
})
export class UsersModule {}
  