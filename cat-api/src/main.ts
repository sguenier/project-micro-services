// Filename : main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions } from '@nestjs/microservices';
import { grpcConfig } from './grpc.config';
async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    grpcConfig,
  );
  // console log the port
  console.log('gRPC server running on port:', grpcConfig.options);
  await app.listen();
}
bootstrap();