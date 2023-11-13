import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Model } from "mongoose";

export type BuyerDocument = Buyer & Document;

@Schema()
export class Buyer {
    @Prop({ required:true })
    userId: string;

    @Prop({ required:true })
    name: string;

    @Prop({ required:false })
    address: string;

    @Prop({ required:false })
    code: string;

    @Prop({required:false })
    country: string;

    @Prop({required:false })
    state: string;

    @Prop({required:false })
    city: string;

    @Prop({required:false })
    county: string;

    @Prop({required:false })
    region: string;

    @Prop({required:false })
    quarter: string;

    @Prop({required:false })
    village: string;

    @Prop({required:false })
    road: string;

    @Prop({required:false })
    houseNumber: string;

    @Prop({required:false })
    highway: string;

    @Prop({required:false })
    suburb: string;

    @Prop({ required:false })
    lat: string;

    @Prop({ required:false })
    lng: string;

    @Prop({required:false })
    youRealtor: string;

    @Prop({required:false })
    withRealtor: string;

    @Prop({required:false })
    typeHouse: string;

    @Prop({required:false })
    interestCity: string;

    @Prop({required:false })
    mortage: string;

    @Prop({required:false })
    phone: string;

    @Prop({required:false })
    radius: string;

    @Prop({ required:false, default: Date.now() })
    createdDate: Date
}

export const BuyerSchema = SchemaFactory.createForClass(Buyer)
