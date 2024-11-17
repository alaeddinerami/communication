import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { FriendRequesRepositorie } from './friends-request.repostorie';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/users/users.entity';
import { FriendRequest } from './friends-request.entity';

@Injectable()
export class FriendsRequestService {
    constructor(
        private readonly friendRequestRepository: FriendRequesRepositorie,
        @InjectModel(User.name) private userModel: Model<User>,
    ) {}

    async sendFriendRequest(fromId: string, toId: string): Promise<any> {
        try {
            const fromUser = await this.userModel.findById(fromId);
            const toUser = await this.userModel.findById(toId);

            const exestRequest = await this.friendRequestRepository.findRequest(fromId , toId);

            if(exestRequest){

                throw new BadRequestException('You cannot send a friend request to yourself.')
            }
            

            if (!fromUser || !toUser) {
                throw new NotFoundException('User not found');
            }

            

            // if (fromUser.friends.includes(t)) {
            //     throw new Error('You are already friends');
            //     return;
            // }

            const friendRequest = await this.friendRequestRepository.createRequest({
                from: fromId,
                to: toId,
                status: 'pending',
            });

            return { success: true, message: 'Friend request sent successfully' };
        } catch (error) {
            console.error('Error sending friend request:', error);
            throw new Error('Error sending friend request');
        }
    }

    async approveRequest(requestId: string): Promise<void> {

        
        const request = await this.friendRequestRepository.updateStatus(requestId, 'approve');

        if (!request) {

            throw new NotFoundException(`Friend request with ID ${requestId} not found or invalid`);
        }

        try {
            await this.userModel.findByIdAndUpdate(request.from, { $addToSet: { friends: request.to } });
            await this.userModel.findByIdAndUpdate(request.to, { $addToSet: { friends: request.from } });
        } catch (error) {
            console.error('Error updating friend lists:', error);
            throw new Error('Error approving friend request');
        }
    }

    async rejectRequest(requestId: string): Promise<void> {
        const request = await this.friendRequestRepository.updateStatus(requestId, 'reject');
        if (!request) {
            throw new NotFoundException(`Friend request with ID ${requestId} not found`);
        }
    }

    async deleteRequest(fromId: string , toId: string): Promise<void> {

        const request = await this.friendRequestRepository.deleteRequest(fromId , toId);
        if(!request){
            throw new NotFoundException('cant delete this request');
        }
    }

    async getFreiendRequest(userId: string): Promise<any> {


        try{

            const requests = await this.friendRequestRepository.getUserReq(userId);

            return { success : true , requests };

        }catch(err){

            throw new NotFoundException('error fetching friends requests');

        }


    
    }
}
