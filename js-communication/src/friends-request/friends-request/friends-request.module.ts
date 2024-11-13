import { Module } from '@nestjs/common';
import { FriendsRequestController } from './friends-request.controller';

@Module({
  controllers: [FriendsRequestController]
})
export class FriendsRequestModule {}
