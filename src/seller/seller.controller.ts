import { Controller, HttpCode, UseGuards, Request, Get, Res, HttpStatus, Param, NotFoundException, Post, Body, Put, Query, Delete, Req } from '@nestjs/common';
import { SellerService } from './seller.service';
import { AuthGuard } from './seller.guard';
import { Seller } from './schemas/seller.schema';
import { ValidateObjectId } from '../shared/pipes/validate-object-id.pipes';
import { JwtService } from '@nestjs/jwt';
import { Handler } from './utils/handler';
import { validateAsync} from 'parameter-validator';


@Controller('seller')
export class SellerController {

  constructor(private sellerService: SellerService, private jwtService: JwtService, private Handler: Handler) { }

  // add seller location
  @UseGuards(AuthGuard)
  @Post('/add-seller-location')
  async addLocations(@Res() response, @Body() activeShowing: any) {
    try {
      const newSellerLocation = await this.sellerService.addSellerLocation(activeShowing);
      let result = this.Handler.success(response, newSellerLocation);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // Delete seller location
  @UseGuards(AuthGuard)
  @Post('/delete-seller-location')
  async deleteActiveShowing(@Res() response, @Body() data: any) {
    try {
      const mySellerLocations = await this.sellerService.deleteSellerLocation(data);
      let result = this.Handler.success(response, mySellerLocations);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // Get my active showings agent
  @Get('get-my-seller-location/:id')
  async getMyActiveShowing(@Param('id') id: string, @Res() response, @Req() req) {
    try {
      const myActiveShowing = await this.sellerService.getMyActiveShowing(id);
      let result = this.Handler.success(response, myActiveShowing);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // Get all active showings
  @UseGuards(AuthGuard)
  @Get('get-all-sellers')
  async getAllActiveShowing(@Res() response, @Req() req) {
    try {
      const allActiveShowing = await this.sellerService.getAllActiveShowing();
      let result = this.Handler.success(response, allActiveShowing);
      return result
    }
    catch (error) {
        return this.Handler.errorException(response, error);
    }
  }

  // // Get subscriber by id
  // @UseGuards(AuthGuard)
  // @Get('get-active-area/:id')
  // async getSubscriberType(@Param('id') id: string, @Res() response, @Req() req) {
  //   try {
  //     const newLocations = await this.sellerService.getActiveArea(id);
  //     let result = this.Handler.success(response, newLocations);
  //     return result
  //   }
  //   catch (error) {
  //       return this.Handler.errorException(response, error);
  //   }
  // }

  // // Get all agents
  // @UseGuards(AuthGuard)
  // @Get('get-all-agents')
  // async getAllAgents(@Res() response, @Req() req) {
  //   try {
  //     const allAgents = await this.sellerService.getAllAgents();
  //     let result = this.Handler.success(response, allAgents);
  //     return result
  //   }
  //   catch (error) {
  //       return this.Handler.errorException(response, error);
  //   }
  // }

  
}
