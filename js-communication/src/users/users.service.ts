import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {

    @Prop({ required: true})
    userName: string;

    @Prop({required: true , unique:true})
    email: string
    
    @Prop({enum:['online','offline','banned'], default:'online'})
    status : string

    @Prop({enum:['user','moderator'] , default:'user'})
    role : string

    @Prop({type:[String] , default: [] })
    friends : string[];

    @Prop({type:[String] , default: [] })
    channels: string[];

    @Prop({type: Number , default: 0} )
    score : number

}

export const userSchema = SchemaFactory.createForClass(User);