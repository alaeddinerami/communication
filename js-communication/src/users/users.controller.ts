import { Body, Controller , Post } from '@nestjs/common';
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






}
