import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { VerifyModule } from './verify/verify.module';
import { MapModule } from './map/map.module';
import { ShowingModule } from './showing/showing.module';
import { BuyerModule } from './buyer/buyer.module';
import { SellerModule } from './seller/seller.module';
import { HttpModule, HttpService } from '@nestjs/axios';
import {  } from '@nestjs/platform-express';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/users', {}),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    // HttpModule.register({
    //   timeout: 5000, // optional timeout value
    //   maxRedirects: 5, // optional maximum redirects value
    //   responseType: 'json', // optional response type
    //   headers: {
    //     // 'Access-Control-Allow-Origin': 'http://localhost:3000',
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
    //     'Access-Control-Allow-Headers': 'Content-Type',
    //   },
    // }),
    UserModule,
    VerifyModule,
    MapModule,
    ShowingModule,
    BuyerModule,
    SellerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  // constructor(private readonly httpService: HttpService) {}
}
