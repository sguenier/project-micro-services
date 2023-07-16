// Filename : grpc.config.ts
import { GrpcOptions, Transport } from '@nestjs/microservices';
import { CAT_V1ALPHA_PACKAGE_NAME } from './stubs/cat/v1alpha/cat';
import { join } from 'path';
import { addReflectionToGrpcConfig } from 'nestjs-grpc-reflection';
export const grpcConfig = addReflectionToGrpcConfig({
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:6000',
    package: CAT_V1ALPHA_PACKAGE_NAME,
    protoPath: join(__dirname, 'proto/cat/v1alpha/cat.proto'),
  },
}) as GrpcOptions;