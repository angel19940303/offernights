import { Controller, HttpCode, UseGuards, Request, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete, Req } from '@nestjs/common';
import { BuyerService } from './buyer.service';
import { AuthGuard } from './buyer.guard';
import { Buyer } from './schemas/buyer.schema';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { JwtService } from '@nestjs/jwt';
import { Handler } from './utils/handler';
import { validateAsync} from 'parameter-validator';


@Controller('buyer')
export class BuyerController {

  constructor(private buyerService: BuyerService, private jwtService: JwtService, private Handler: Handler) { }

  // add active showing agent
  @UseGuards(AuthGuard)
  @Post('/add-buyer-location')
  async addLocations(@Res() response, @Body() activeShowing: any) {
    try {
      const newBuyerLocation = await this.buyerService.addBuyerLocation(activeShowing);
      let result = this.Handler.success(response, newBuyerLocation);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

   // Delete active showing
   @UseGuards(AuthGuard)
   @Post('/delete-buyer-info')
   async deleteActiveShowing(@Res() response, @Body() data: any) {
     try {
       const myActiveShowing = await this.buyerService.deleteActiveShowing(data);
       let result = this.Handler.success(response, myActiveShowing);
       console.log(myActiveShowing)
       return result
     }
     catch (error) {
         return this.Handler.errorException(response, error);
     }
   }
  
  // Get all agents
  @UseGuards(AuthGuard)
  @Get('get-all-buyers')
  async getAllBuyers(@Res() response, @Req() req) {
    try {
      const allBuyers = await this.buyerService.getAllBuyers();
      let result = this.Handler.success(response, allBuyers);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // Get my active showings agent
  @Get('get-my-buyer-location/:id')
  async getMyActiveShowing(@Param('id') id: string, @Res() response, @Req() req) {
    try {
      const myActiveShowing = await this.buyerService.getMyActiveShowing(id);
      let result = this.Handler.success(response, myActiveShowing);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // // Get all active showings
  // @UseGuards(AuthGuard)
  // @Get('get-all-active-showing')
  // async getAllActiveShowing(@Res() response, @Req() req) {
  //   try {
  //     const allActiveShowing = await this.buyerService.getAllActiveShowing();
  //     let result = this.Handler.success(response, allActiveShowing);
  //     return result
  //   }
  //   catch (error) {
  //       return this.Handler.errorException(response, error);
  //   }
  // }

  // // Get subscriber by id
  // @UseGuards(AuthGuard)
  // @Get('get-active-area/:id')
  // async getSubscriberType(@Param('id') id: string, @Res() response, @Req() req) {
  //   try {
  //     const newLocations = await this.buyerService.getActiveArea(id);
  //     let result = this.Handler.success(response, newLocations);
  //     return result
  //   }
  //   catch (error) {
  //       return this.Handler.errorException(response, error);
  //   }
  // }
}
