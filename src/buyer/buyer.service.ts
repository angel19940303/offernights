import { Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Handler } from './utils/handler';
import { Buyer, BuyerDocument } from './schemas/buyer.schema';

@Injectable()
export class BuyerService {

  constructor(@InjectModel(Buyer.name) private buyerModel: Model<BuyerDocument>, private readonly Handler: Handler, private readonly jwtService: JwtService) { }
  
  async getOne(email): Promise<Buyer> {
    return await this.buyerModel.findOne({ email }).exec();
  }

  async addBuyerLocation(buyerLocation: any): Promise<any> {
    const newBuyerLocation = new this.buyerModel(buyerLocation);
    await newBuyerLocation.save();
    
    let myBuyerLocations = await this.buyerModel.find({
      userId: buyerLocation.userId
    }).exec();
    return myBuyerLocations;
  }

  async getAllBuyers(): Promise<any> {
    let allBuyers = await this.buyerModel.find().exec();
    if(allBuyers) {
      return allBuyers
    } else {
      return []
    }
  }

  async deleteActiveShowing(data: any): Promise<any> {
    await this.buyerModel.findByIdAndDelete(data.id);
    let myActiveShowing = await this.buyerModel.find({userId: data.userId}).exec();
    return myActiveShowing;
  }

  async getMyActiveShowing(id: string): Promise<any> {
    let myActiveShowing = await this.buyerModel.find({userId: id}).exec();
    if(myActiveShowing) {
      return myActiveShowing
    } else {
      return []
    }
  }

  // async getAllActiveShowing(): Promise<any> {
  //   let allActiveShowing = await this.buyerModel.find().exec();
  //   if(allActiveShowing) {
  //     return allActiveShowing
  //   } else {
  //     return []
  //   }
  // }

  // async getActiveArea(id: string): Promise<any> {
  //   let allActiveArea = await this.buyerModel.findOne({userId: id}).exec();
  //   if(allActiveArea) {
  //     return allActiveArea.location
  //   } else {
  //     return []
  //   }
  // }

  
}
