// Filename : app.controller.ts
import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  CreateRequest,
  CreateResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  CatServiceClient,
  Cat,
  CatServiceController,
  UpdateRequest,
  UpdateResponse,
  CatServiceControllerMethods,
} from './stubs/cat/v1alpha/cat';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';
@Controller()
@CatServiceControllerMethods()
export class AppController implements CatServiceController {
  constructor(private readonly appService: AppService) {}
  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let cat: Cat;
    let cats: Cat[] = [];
    if (request.id) {
      cat = await this.appService.findById(request.id);
      return { cats: [cat] };
    } else if (request.name) {
      cat = await this.appService.findByName(request.name);
      return { cats: [cat] };
    } else {
      cats = await this.appService.findAll();
      return { cats };
    }
  }
  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    let cat: Cat;
    if (request.id) {
      cat = await this.appService.updateById(request.id, request);
      return { cat };
    } else if (request.name) {
      cat = await this.appService.updateByName(request.name, request);
      return { cat };
    } else {
      throw new Error('id or name must be provided');
    }
  }
  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    if (request.id) {
      await this.appService.deleteById(request.id);
    } else if (request.name) {
      await this.appService.deleteByName(request.name);
    } else {
      throw new Error('id or name must be provided');
    }
    return {};
  }
  async create(request: CreateRequest): Promise<CreateResponse> {
    const cat = await this.appService.create(request);
    return { cat };
  }
}