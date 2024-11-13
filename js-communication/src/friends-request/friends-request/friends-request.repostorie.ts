import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { FriendRequest } from "./friends-request.entity";

@Injectable()
export class FriendRequesRepositorie{


    constructor(@InjectModel(FriendRequest.name) private friendRequestModel: Model<FriendRequest>){}

    async create(userData: Partial<FriendRequest>): Promise<FriendRequest> {

        const createRequest = new this.friendRequestModel(userData);

        return createRequest.save();

    }

    async findRequest(fromId: string , toId: string ) : Promise<FriendRequest | null> {
        
        return this.friendRequestModel.findOne({From: fromId , To: toId}).exec();
    }

    async updateStatus(requestId: string , status: 'approve'|'reject'):Promise<FriendRequest>  {

        return await this.friendRequestModel.findOneAndUpdate( {requestId} ,{status},{new:true}).exec();
    }

    async getUserRequests(userId : string): Promise<FriendRequest[]>{

        return await this.friendRequestModel.find({$or:[{ From:userId},{To:userId}]}).exec();
    }
  
  

    }

