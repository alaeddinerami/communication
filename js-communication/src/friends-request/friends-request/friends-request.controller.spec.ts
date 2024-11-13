import { Test, TestingModule } from '@nestjs/testing';
import { FriendsRequestController } from './friends-request.controller';

describe('FriendsRequestController', () => {
  let controller: FriendsRequestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FriendsRequestController],
    }).compile();

    controller = module.get<FriendsRequestController>(FriendsRequestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
