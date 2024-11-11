import { Injectable } from '@nestjs/common';
import { User } from './users.entity';
import { UserRepositorie } from './users.repositorie';
import { CreateUserDTO } from './DTO/create-user.dto';


@Injectable()
export class UsersService {

    constructor(private readonly userRepositorie: UserRepositorie ){}

async Create (createUser : CreateUserDTO): Promise<User>{

    const user = await this.userRepositorie.findByEmail(createUser.email);

    if(user){
        throw new Error('user already exists');
    }

    return this.userRepositorie.create(createUser);
}



}
