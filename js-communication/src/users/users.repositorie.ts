import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { User } from "./users.entity";


@Injectable()
export class UserRepositorie{

    constructor(@InjectModel(User.name) private userModel: Model<User>){}

    async create(userData: Partial<User>): Promise<User> {

        const createUser = new this.userModel(userData);
        return createUser.save();

    }

    async findByEmail(email: string): Promise<User> {

        return this.userModel.findOne({email}).exec();
    }

    }

