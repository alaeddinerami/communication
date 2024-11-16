import { Prop , Schema , SchemaFactory } from "@nestjs/mongoose";
import { Document, Types  } from "mongoose";

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

    @Prop({ type: [{ type: Types.ObjectId, ref: "User" }], default: [] })
    friends: Types.ObjectId[];

    @Prop({type:[String] , default: [] })
    channels: string[];

    @Prop({type: Number , default: 0} )
    score : number

}


export const userSchema = SchemaFactory.createForClass(User);
