import { Body, Controller , Post , BadRequestException, Get, NotFoundException, Param } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './users.entity';
import { CreateUserDTO } from './DTO/create-user.dto';




@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}

    @Post('register')
    async register(@Body() createUser : CreateUserDTO ){

        return await this.usersService.Create(createUser);
    }


    @Post('login')
    async login(@Body('email') email: string){

        if(!email){

            throw new BadRequestException('Email is required');
        }
 
        const {token , user} = await this.usersService.login(email)
        return {message : 'login successfully', token , user }
    }   


    @Get('allUsers')
    async getAllUsers(){

        const users = await this.usersService.getAllUsers();

        if(!users || users.length === 0){
            
            throw new NotFoundException('no users found');
        }

        return {message: 'users fetched successfully',users}
    }

    @Get('userFriends/:userId')
    async getUserFriends(@Param('userId') userId: string){


        try{

            const friends = await this.usersService.getUserFriends(userId);

            if(!friends || friends.length === 0){
                
                throw new NotFoundException('no friends found');
            }
    
            return {message: 'user friends fetched successfully', friends}

        }catch(err){

            throw new Error('error' + err)
        }
      
    }






}
