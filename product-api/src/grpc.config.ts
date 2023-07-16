import { GrpcOptions, Transport } from '@nestjs/microservices';
import { PRODUCT_V1ALPHA_PACKAGE_NAME } from './stubs/product/v1alpha/product';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
export const grpcConfig = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: '127.0.0.1:6000',
    package: PRODUCT_V1ALPHA_PACKAGE_NAME,
    protoPath: join(__dirname, 'proto/product/v1alpha/product.proto'),
  },
}) as GrpcOptions;
