import { Injectable, HttpStatus } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { JwtService } from '@nestjs/jwt';
import { Handler } from './utils/handler';
import { Seller, SellerDocument } from './schemas/seller.schema';

@Injectable()
export class SellerService {

  constructor(@InjectModel(Seller.name) private sellerModel: Model<SellerDocument>, private readonly Handler: Handler, private readonly jwtService: JwtService) { }
  
  async getOne(email): Promise<Seller> {
    return await this.sellerModel.findOne({ email }).exec();
  }

  async addSellerLocation(sellerLocation: any): Promise<any> {
    const newSellerLocation = new this.sellerModel(sellerLocation);
    await newSellerLocation.save();
    
    let mySellerLocations = await this.sellerModel.find({
      userId: sellerLocation.userId
    }).exec();
    return mySellerLocations;
  }

  async deleteSellerLocation(data: any): Promise<any> {
    await this.sellerModel.findByIdAndDelete(data.id);
    let myActiveShowing = await this.sellerModel.find({userId: data.userId}).exec();
    return myActiveShowing;
  }

  async getMyActiveShowing(id: string): Promise<any> {
    let myActiveShowing = await this.sellerModel.find({userId: id}).exec();
    if(myActiveShowing) {
      return myActiveShowing
    } else {
      return []
    }
  }

  async getAllActiveShowing(): Promise<any> {
    let allActiveShowing = await this.sellerModel.find().exec();
    if(allActiveShowing) {
      return allActiveShowing
    } else {
      return []
    }
  }

  // async getActiveArea(id: string): Promise<any> {
  //   let allActiveArea = await this.sellerModel.findOne({userId: id}).exec();
  //   if(allActiveArea) {
  //     return allActiveArea.location
  //   } else {
  //     return []
  //   }
  // }

  // async getAllAgents(): Promise<any> {
  //   let allAgents = await this.sellerModel.find().exec();
  //   if(allAgents) {
  //     return allAgents
  //   } else {
  //     return []
  //   }
  // }

  
}
