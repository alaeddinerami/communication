import { Body, Controller , Post , BadRequestException, Get, NotFoundException } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDTO } from './DTO/create-user.dto';




@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() createUser : CreateUserDTO ){
<<<<<<< HEAD
        return this.usersService.Create(createUser);
=======

        return await this.usersService.Create(createUser);
    }


    @Post('login')
    async login(@Body('email') email: string){

        if(!email){

            throw new BadRequestException('Email is required');
        }

        const {token} = await this.usersService.login(email)
        return {message : 'login successfully', token}
    }


    @Get('allUsers')
    async getAllUsers(){

        const users = await this.usersService.getAllUsers();

        if(!users || users.length === 0){
            
            throw new NotFoundException('no users found');
        }

        return {message: 'users fetched successfully',users}
>>>>>>> 6270be9ad8e20e507b338d87388973b4cefb1944
    }






}
