import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import {
  AddRequest,
  AddResponse,
  DeleteRequest,
  DeleteResponse,
  GetRequest,
  GetResponse,
  PRODUCT_CR_UD_SERVICE_NAME,
  Product,
  ProductCRUDServiceController,
  UpdateRequest,
  UpdateResponse,
  ProductCRUDServiceControllerMethods,
} from './stubs/product/v1alpha/product';
import { GrpcMethod } from '@nestjs/microservices';
import { Metadata } from '@grpc/grpc-js';

@Controller()
@ProductCRUDServiceControllerMethods()
export class AppController implements ProductCRUDServiceController {
  constructor(private readonly appService: AppService) {}

  async get(request: GetRequest, metadata?: Metadata): Promise<GetResponse> {
    let product: Product;
    let products: Product[] = [];
    if (request.id) {
      product = await this.appService.findById(request.id);
      return { products: [product] };
    } else {
      products = await this.appService.findAll();
      return { products };
    }
  }

  async update(
    request: UpdateRequest,
    metadata?: Metadata,
  ): Promise<UpdateResponse> {
    const { id, name, price } = request;
    const updatedProduct = await this.appService.update(id, { name, price });
    return { product: updatedProduct };
  }

  async delete(
    request: DeleteRequest,
    metadata?: Metadata,
  ): Promise<DeleteResponse> {
    const { id } = request;
    await this.appService.delete(id);
    return { message: `Product with ID ${id} deleted successfully` };
  }

  async add(request: AddRequest): Promise<AddResponse> {
    const name = request.name;
    const price = request.price;

    const newProduct = await this.appService.create({ name, price });
    return { product: newProduct };
  }
}
