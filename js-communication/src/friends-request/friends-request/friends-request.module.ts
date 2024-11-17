import { Module } from '@nestjs/common';
import { FriendsRequestController } from './friends-request.controller';
import { FriendRequesRepositorie } from './friends-request.repostorie';
import { FriendsRequestService } from './friends-request.service';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendRequestSchema , FriendRequest } from './friends-request.entity'
import { userSchema } from 'src/users/users.entity';
import { User } from 'src/users/users.entity';

@Module({
  controllers: [FriendsRequestController],
  imports: [ MongooseModule.forFeature([{name: FriendRequest.name , schema: FriendRequestSchema} , 
                                        {name: User.name , schema: userSchema}
  ]) 
                                        
        ],
  providers: [FriendRequesRepositorie , FriendsRequestService ]
})
export class FriendsRequestModule {}
