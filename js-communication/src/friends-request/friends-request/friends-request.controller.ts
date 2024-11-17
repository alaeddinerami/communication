import { BadRequestException, Controller, Delete, Get, NotFoundException, NotImplementedException, Param, Post } from '@nestjs/common';
import { FriendsRequestService } from './friends-request.service';

@Controller('friends/request')
export class FriendsRequestController {
  constructor(private readonly friendRequestService: FriendsRequestService) {}

  
  @Post(':fromId/send/:toId')
  async sendFriendRequest(
    @Param('fromId') fromId: string,
    @Param('toId') toId: string ): Promise<any> {
    try {

      if(fromId === toId){

        throw new BadRequestException('You cannot send a friend request to yourself');
      }

      return await this.friendRequestService.sendFriendRequest(fromId, toId);
    } catch (err) {
      throw new NotFoundException('Error sending friend request: ' + err.message);
    }
  }

  @Post(':requestId/approve')
  async approveRequest(@Param('requestId') requestId: string): Promise<void> {
    try {


      await this.friendRequestService.approveRequest(requestId);

    } catch (err) {
      throw new NotFoundException('Error approving friend request: ' + err.message);
    }
  }


  @Post(':requestId/reject')
  async rejectRequest(@Param('requestId') requestId: string): Promise<void> {
    try {

      
      await this.friendRequestService.rejectRequest(requestId);

    } catch (err) {
      throw new NotFoundException('Error rejecting friend request: ' + err.message);
    }
  }


  @Delete(':fromId/withdraw/:toId')
  async withdrawRequest( @Param('fromId') fromId: string, @Param('toId') toId: string ): Promise<any>{

    try{

      await this.friendRequestService.deleteRequest(fromId , toId);

    }catch(err){
      throw new NotFoundException('Error deleting friend request')
    }
  }

  @Get('getRequests/:userId')
  async getRequests( @Param('userId') userId: string, ): Promise<any>{

    try{

     return await this.friendRequestService.getFreiendRequest(userId);

    }catch(err){

      throw new NotFoundException('Error finding requests')
    }
  }
}
