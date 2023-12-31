// @generated by protobuf-ts 2.9.0
// @generated from protobuf file "cat/v1alpha/cat.proto" (package "cat.v1alpha", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { CatService } from "./cat";
import type { DeleteResponse } from "./cat";
import type { DeleteRequest } from "./cat";
import type { UpdateResponse } from "./cat";
import type { UpdateRequest } from "./cat";
import type { CreateResponse } from "./cat";
import type { CreateRequest } from "./cat";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { GetResponse } from "./cat";
import type { GetRequest } from "./cat";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * @generated from protobuf service cat.v1alpha.CatService
 */
export interface ICatServiceClient {
    /**
     * @generated from protobuf rpc: Get(cat.v1alpha.GetRequest) returns (cat.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse>;
    /**
     * @generated from protobuf rpc: Create(cat.v1alpha.CreateRequest) returns (cat.v1alpha.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse>;
    /**
     * @generated from protobuf rpc: Update(cat.v1alpha.UpdateRequest) returns (cat.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse>;
    /**
     * @generated from protobuf rpc: Delete(cat.v1alpha.DeleteRequest) returns (cat.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse>;
}
/**
 * @generated from protobuf service cat.v1alpha.CatService
 */
export class CatServiceClient implements ICatServiceClient, ServiceInfo {
    typeName = CatService.typeName;
    methods = CatService.methods;
    options = CatService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * @generated from protobuf rpc: Get(cat.v1alpha.GetRequest) returns (cat.v1alpha.GetResponse);
     */
    get(input: GetRequest, options?: RpcOptions): UnaryCall<GetRequest, GetResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetRequest, GetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Create(cat.v1alpha.CreateRequest) returns (cat.v1alpha.CreateResponse);
     */
    create(input: CreateRequest, options?: RpcOptions): UnaryCall<CreateRequest, CreateResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<CreateRequest, CreateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Update(cat.v1alpha.UpdateRequest) returns (cat.v1alpha.UpdateResponse);
     */
    update(input: UpdateRequest, options?: RpcOptions): UnaryCall<UpdateRequest, UpdateResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<UpdateRequest, UpdateResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * @generated from protobuf rpc: Delete(cat.v1alpha.DeleteRequest) returns (cat.v1alpha.DeleteResponse);
     */
    delete(input: DeleteRequest, options?: RpcOptions): UnaryCall<DeleteRequest, DeleteResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<DeleteRequest, DeleteResponse>("unary", this._transport, method, opt, input);
    }
}
