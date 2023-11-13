import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Model } from "mongoose";

export type ShowingDocument = Showing & Document;

@Schema()
export class Showing {
    @Prop({ required:false, default: 0 })
    listing: string;

    @Prop({ required:true })
    userId: string;

    @Prop({ required:true })
    name: string;

    @Prop({ required:false })
    address: string;

    @Prop({ required:false })
    code: string;

    @Prop({ required:false })
    offerDate: string;

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
    highway: string;

    @Prop({required:false })
    suburb: string;

    @Prop({required:false })
    houseNumber: string;

    @Prop({ required:true })
    lat: string;

    @Prop({ required:true })
    lng: string;

    @Prop({required:true })
    price: string;

    @Prop({required:false })
    unit: string;

    @Prop({ required:false, default: Date.now() })
    createdDate: Date
}

export const ShowingSchema = SchemaFactory.createForClass(Showing)
