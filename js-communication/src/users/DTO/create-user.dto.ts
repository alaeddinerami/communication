import { IsEmail , IsNotEmpty , IsEnum , IsString } from "class-validator";


export class CreateUserDTO{


    @IsString()
    @IsNotEmpty()
    userName: string;

    @IsEmail()
    @IsNotEmpty()
    email: string;
    
}