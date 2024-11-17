// src/channels/channel.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { ChannelRepository } from './channel.repository';
import { Channel } from './channel.entity';

@Injectable()
export class ChannelService {
  constructor(private readonly channelRepository: ChannelRepository) {}

  async create(name: string, description: string): Promise<Channel> {
    return this.channelRepository.create({ name, description });
  }

  async findAll(): Promise<Channel[]> {
    return this.channelRepository.findAll();
  }

  async findOne(id: string): Promise<Channel> {
    const channel = await this.channelRepository.findOne(id);
    if (!channel) {
      throw new NotFoundException('Channel not found');
    }
    return channel;
  }

  async update(id: string, name: string, description: string): Promise<Channel> {
    const channel = await this.channelRepository.update(id, { name, description });
    if (!channel) {
      throw new NotFoundException('Channel not found');
    }
    return channel;
  }

  async delete(id: string): Promise<void> {
    const channel = await this.channelRepository.delete(id);
    if (!channel) {
      throw new NotFoundException('Channel not found');
    }
  }
}
