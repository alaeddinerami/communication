import { Type } from "@nestjs/common";
import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document , Types } from "mongoose";

@Schema()
export class FriendRequest extends Document {

    @Prop({ type :Types.ObjectId , ref: 'User' , required: true})
    From: Types.ObjectId ;

    @Prop({ type :Types.ObjectId , ref: 'User' , required: true })
    To: Types.ObjectId ;
    
    @Prop({enum:['approve','reject','pending'], default:'pending'})
    status : string

}

export const FriendRequestSchema = SchemaFactory.createForClass(FriendRequest);
