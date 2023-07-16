/* eslint-disable */
import { Metadata } from "@grpc/grpc-js";
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "cat.v1alpha";

export interface Cat {
  name?: string | undefined;
  id?: number | undefined;
  age?: number | undefined;
  breed?: string | undefined;
}

export interface GetRequest {
  name?: string | undefined;
  id?: number | undefined;
}

export interface GetResponse {
  cats?: Cat[] | undefined;
}

export interface CreateRequest {
  name?: string | undefined;
  id?: number | undefined;
  age?: number | undefined;
  breed?: string | undefined;
}

export interface CreateResponse {
  cat?: Cat | undefined;
}

export interface UpdateRequest {
  name?: string | undefined;
  id?: number | undefined;
  age?: number | undefined;
  breed?: string | undefined;
}

export interface UpdateResponse {
  cat?: Cat | undefined;
}

export interface DeleteRequest {
  name?: string | undefined;
  id?: number | undefined;
}

/** should return nothing */
export interface DeleteResponse {
}

export const CAT_V1ALPHA_PACKAGE_NAME = "cat.v1alpha";

export interface CatServiceClient {
  get(request: GetRequest, metadata?: Metadata): Observable<GetResponse>;

  create(request: CreateRequest, metadata?: Metadata): Observable<CreateResponse>;

  update(request: UpdateRequest, metadata?: Metadata): Observable<UpdateResponse>;

  delete(request: DeleteRequest, metadata?: Metadata): Observable<DeleteResponse>;
}

export interface CatServiceController {
  get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> | Observable<GetResponse> | GetResponse;

  create(
    request: CreateRequest,
    metadata?: Metadata,
  ): Promise<CreateResponse> | Observable<CreateResponse> | CreateResponse;

  update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> | Observable<UpdateResponse> | UpdateResponse;

  delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> | Observable<DeleteResponse> | DeleteResponse;
}

export function CatServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["get", "create", "update", "delete"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("CatService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("CatService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const CAT_SERVICE_NAME = "CatService";
