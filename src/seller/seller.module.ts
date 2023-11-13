import { Module } from '@nestjs/common';
import { SellerController } from './seller.controller';
import { SellerService } from './seller.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SellerSchema } from './schemas/seller.schema';
import { JwtModule } from '@nestjs/jwt';
import { Handler } from './utils/handler';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Seller', schema: SellerSchema }]),
    JwtModule.register({
      global: true,
      secret: "secret",
      signOptions: { expiresIn: '3h' },
    }),
    SellerModule
  ],
  controllers: [SellerController],
  providers: [SellerService, Handler],
  exports: [SellerService]
})
export class SellerModule {
}
