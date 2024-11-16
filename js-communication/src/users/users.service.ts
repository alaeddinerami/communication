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


async login (email : string ) {

    const user = await this.userRepositorie.findByEmail(email);

    if(!user){
        throw new UnauthorizedException('User not found');
    }

    const payload = {email : user.email , id : user.id , name : user.userName };
    const token  = this.jwtService.sign(payload);

    return {token , user };     
}

async getAllUsers (){

    const users = await this.userRepositorie.getAllUsers();

    if(!users){
        throw new NotFoundException('no users found');
    }

    return users
}


async getUserFriends (userId: string): Promise<any>{

    const user = await this.userRepositorie.getUserFriends(userId);

    if(!user){

        throw new NotFoundException('user friends not found');
    }

    const friends = user.friends;

    return friends
    
}





}
