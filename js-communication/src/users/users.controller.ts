import { Body, Controller , Post , BadRequestException, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDTO } from './DTO/create-user.dto';




@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() createUser : CreateUserDTO ){

        return this.usersService.Create(createUser);
    }


    @Post('login')
    async login(@Body('email') email: string){

        if(!email){

            throw new BadRequestException('Email is required');
        }

        const {token} = await this.usersService.login(email)
        return {message : 'login successfully', token}
    }


    @Get('getAllUsers')
    async getAllUsers






}
