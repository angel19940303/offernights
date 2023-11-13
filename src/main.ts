import { NestFactory } from '@nestjs/core';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';
const { createProxyMiddleware } = require('http-proxy-middleware');
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
const cors = require('cors');
import {config} from 'dotenv';
import { join } from 'path';

config({ path: join(__dirname, '../.env') });

async function bootstrap() {
  const server_port = process.env.SERVER_PORT;
  const client_port = process.env.CLIENT_PORT;
  const url = process.env.URL;
  
  const app = await NestFactory.create(AppModule, {cors: true});

  app.use(cors({ origin: `http://${url}:${client_port}` }));
  
  // app.use((req, res, next) => {
  //   res.setHeader('Access-Control-Allow-Origin', '*');
  //   res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  //   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Accept');
  //   next();
  // });
  app.use(
    '/api',
    createProxyMiddleware({
      target: `http://${url}:${server_port}`,
      changeOrigin: true,
    })
  );
  await app.listen(5000, '0.0.0.0');
}
bootstrap();

