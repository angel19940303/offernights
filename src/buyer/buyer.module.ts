import { Module } from '@nestjs/common';
import { BuyerController } from './buyer.controller';
import { BuyerService } from './buyer.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BuyerSchema } from './schemas/buyer.schema';
import { JwtModule } from '@nestjs/jwt';
import { Handler } from './utils/handler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Buyer', schema: BuyerSchema }]),
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '3h' },
    }),
    BuyerModule
  ],
  controllers: [BuyerController],
  providers: [BuyerService, Handler],
  exports: [BuyerService]
})
export class BuyerModule {
}
