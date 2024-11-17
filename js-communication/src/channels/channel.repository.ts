// src/channels/channel.repository.ts

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelRepository {
  constructor(
    @InjectModel(Channel.name) private channelModel: Model<Channel>,
  ) {}

  async create(createChannelDto: { name: string; description: string }): Promise<Channel> {
    const channel = new this.channelModel(createChannelDto);
    return await channel.save();
  }

  async findAll(): Promise<Channel[]> {
    return await this.channelModel.find().exec();
  }

  async findOne(id: string): Promise<Channel> {
    return await this.channelModel.findById(id).exec();
  }

  async update(id: string, updateChannelDto: { name: string; description: string }): Promise<Channel> {
    return await this.channelModel.findByIdAndUpdate(id, updateChannelDto, { new: true }).exec();
  }

  async delete(id: string): Promise<Channel> {
    return await this.channelModel.findByIdAndDelete(id).exec();
  }
}
