import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type VerifyDocument = Verify & Document;

@Schema()
export class Verify {

    @Prop({required:false })
    email: string;

    @Prop({required:false })
    token: string;

    @Prop({required:false, default: Date.now() })
    createdDate: Date
}

export const VerifySchema = SchemaFactory.createForClass(Verify)
