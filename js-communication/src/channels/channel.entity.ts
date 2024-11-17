// src/channels/channel.entity.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Channel extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: 0 })
  membersCount: number;
}

export const ChannelSchema = SchemaFactory.createForClass(Channel);
