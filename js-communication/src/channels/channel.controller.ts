// src/channels/channel.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
import { ChannelService } from './channel.service';
import { Channel } from './channel.entity';

@Controller('channels')
export class ChannelController {
  constructor(private readonly channelService: ChannelService) {}

  @Post()
  async create(@Body() createChannelDto: { name: string; description: string }): Promise<Channel> {
    return this.channelService.create(createChannelDto.name, createChannelDto.description);
  }

  @Get()
  async findAll(): Promise<Channel[]> {
    return this.channelService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Channel> {
    return this.channelService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateChannelDto: { name: string; description: string }): Promise<Channel> {
    return this.channelService.update(id, updateChannelDto.name, updateChannelDto.description);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.channelService.delete(id);
  }
}
