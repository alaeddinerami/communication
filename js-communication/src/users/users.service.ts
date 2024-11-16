import { Injectable , UnauthorizedException , NotFoundException } from '@nestjs/common';
import { User } from './users.entity';
import { UserRepositorie } from './users.repositorie';
import { CreateUserDTO } from './DTO/create-user.dto';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class UsersService {

    constructor(
        private readonly userRepositorie: UserRepositorie,
        private readonly jwtService : JwtService ,
     ){}

async Create (createUser : CreateUserDTO): Promise<User>{

    const user = await this.userRepositorie.findByEmail(createUser.email);

    if(user){
        throw new NotFoundException('user already exists');
    }

    return this.userRepositorie.create(createUser);
}


async login (email : string ) : Promise<{ token : string }>{

    const user = await this.userRepositorie.findByEmail(email);

    if(!user){
        throw new UnauthorizedException('User not found');
    }

    const payload = {email : user.email , id : user.id , name : user.userName };
    const token  = this.jwtService.sign(payload);

    return {token};     
}

async getAllUsers (){

    const users = await this.userRepositorie.getAllUsers();

    if(!users){
        throw new NotFoundException('no users found');
    }

    return users
}





}
