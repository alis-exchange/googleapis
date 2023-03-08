import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_serviceusage_v1_resources_pb from '../../../../google/api/serviceusage/v1/resources_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';


export class EnableServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): EnableServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableServiceRequest): EnableServiceRequest.AsObject;
  static serializeBinaryToWriter(message: EnableServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableServiceRequest;
  static deserializeBinaryFromReader(message: EnableServiceRequest, reader: jspb.BinaryReader): EnableServiceRequest;
}

export namespace EnableServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class EnableServiceResponse extends jspb.Message {
  getService(): google_api_serviceusage_v1_resources_pb.Service | undefined;
  setService(value?: google_api_serviceusage_v1_resources_pb.Service): EnableServiceResponse;
  hasService(): boolean;
  clearService(): EnableServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: EnableServiceResponse): EnableServiceResponse.AsObject;
  static serializeBinaryToWriter(message: EnableServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableServiceResponse;
  static deserializeBinaryFromReader(message: EnableServiceResponse, reader: jspb.BinaryReader): EnableServiceResponse;
}

export namespace EnableServiceResponse {
  export type AsObject = {
    service?: google_api_serviceusage_v1_resources_pb.Service.AsObject,
  }
}

export class DisableServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DisableServiceRequest;

  getDisableDependentServices(): boolean;
  setDisableDependentServices(value: boolean): DisableServiceRequest;

  getCheckIfServiceHasUsage(): DisableServiceRequest.CheckIfServiceHasUsage;
  setCheckIfServiceHasUsage(value: DisableServiceRequest.CheckIfServiceHasUsage): DisableServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableServiceRequest): DisableServiceRequest.AsObject;
  static serializeBinaryToWriter(message: DisableServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableServiceRequest;
  static deserializeBinaryFromReader(message: DisableServiceRequest, reader: jspb.BinaryReader): DisableServiceRequest;
}

export namespace DisableServiceRequest {
  export type AsObject = {
    name: string,
    disableDependentServices: boolean,
    checkIfServiceHasUsage: DisableServiceRequest.CheckIfServiceHasUsage,
  }

  export enum CheckIfServiceHasUsage { 
    CHECK_IF_SERVICE_HAS_USAGE_UNSPECIFIED = 0,
    SKIP = 1,
    CHECK = 2,
  }
}

export class DisableServiceResponse extends jspb.Message {
  getService(): google_api_serviceusage_v1_resources_pb.Service | undefined;
  setService(value?: google_api_serviceusage_v1_resources_pb.Service): DisableServiceResponse;
  hasService(): boolean;
  clearService(): DisableServiceResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableServiceResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DisableServiceResponse): DisableServiceResponse.AsObject;
  static serializeBinaryToWriter(message: DisableServiceResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableServiceResponse;
  static deserializeBinaryFromReader(message: DisableServiceResponse, reader: jspb.BinaryReader): DisableServiceResponse;
}

export namespace DisableServiceResponse {
  export type AsObject = {
    service?: google_api_serviceusage_v1_resources_pb.Service.AsObject,
  }
}

export class GetServiceRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetServiceRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceRequest): GetServiceRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceRequest;
  static deserializeBinaryFromReader(message: GetServiceRequest, reader: jspb.BinaryReader): GetServiceRequest;
}

export namespace GetServiceRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListServicesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServicesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServicesRequest;

  getFilter(): string;
  setFilter(value: string): ListServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesRequest): ListServicesRequest.AsObject;
  static serializeBinaryToWriter(message: ListServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesRequest;
  static deserializeBinaryFromReader(message: ListServicesRequest, reader: jspb.BinaryReader): ListServicesRequest;
}

export namespace ListServicesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    filter: string,
  }
}

export class ListServicesResponse extends jspb.Message {
  getServicesList(): Array<google_api_serviceusage_v1_resources_pb.Service>;
  setServicesList(value: Array<google_api_serviceusage_v1_resources_pb.Service>): ListServicesResponse;
  clearServicesList(): ListServicesResponse;
  addServices(value?: google_api_serviceusage_v1_resources_pb.Service, index?: number): google_api_serviceusage_v1_resources_pb.Service;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServicesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServicesResponse): ListServicesResponse.AsObject;
  static serializeBinaryToWriter(message: ListServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServicesResponse;
  static deserializeBinaryFromReader(message: ListServicesResponse, reader: jspb.BinaryReader): ListServicesResponse;
}

export namespace ListServicesResponse {
  export type AsObject = {
    servicesList: Array<google_api_serviceusage_v1_resources_pb.Service.AsObject>,
    nextPageToken: string,
  }
}

export class BatchEnableServicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchEnableServicesRequest;

  getServiceIdsList(): Array<string>;
  setServiceIdsList(value: Array<string>): BatchEnableServicesRequest;
  clearServiceIdsList(): BatchEnableServicesRequest;
  addServiceIds(value: string, index?: number): BatchEnableServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchEnableServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchEnableServicesRequest): BatchEnableServicesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchEnableServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchEnableServicesRequest;
  static deserializeBinaryFromReader(message: BatchEnableServicesRequest, reader: jspb.BinaryReader): BatchEnableServicesRequest;
}

export namespace BatchEnableServicesRequest {
  export type AsObject = {
    parent: string,
    serviceIdsList: Array<string>,
  }
}

export class BatchEnableServicesResponse extends jspb.Message {
  getServicesList(): Array<google_api_serviceusage_v1_resources_pb.Service>;
  setServicesList(value: Array<google_api_serviceusage_v1_resources_pb.Service>): BatchEnableServicesResponse;
  clearServicesList(): BatchEnableServicesResponse;
  addServices(value?: google_api_serviceusage_v1_resources_pb.Service, index?: number): google_api_serviceusage_v1_resources_pb.Service;

  getFailuresList(): Array<BatchEnableServicesResponse.EnableFailure>;
  setFailuresList(value: Array<BatchEnableServicesResponse.EnableFailure>): BatchEnableServicesResponse;
  clearFailuresList(): BatchEnableServicesResponse;
  addFailures(value?: BatchEnableServicesResponse.EnableFailure, index?: number): BatchEnableServicesResponse.EnableFailure;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchEnableServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchEnableServicesResponse): BatchEnableServicesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchEnableServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchEnableServicesResponse;
  static deserializeBinaryFromReader(message: BatchEnableServicesResponse, reader: jspb.BinaryReader): BatchEnableServicesResponse;
}

export namespace BatchEnableServicesResponse {
  export type AsObject = {
    servicesList: Array<google_api_serviceusage_v1_resources_pb.Service.AsObject>,
    failuresList: Array<BatchEnableServicesResponse.EnableFailure.AsObject>,
  }

  export class EnableFailure extends jspb.Message {
    getServiceId(): string;
    setServiceId(value: string): EnableFailure;

    getErrorMessage(): string;
    setErrorMessage(value: string): EnableFailure;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EnableFailure.AsObject;
    static toObject(includeInstance: boolean, msg: EnableFailure): EnableFailure.AsObject;
    static serializeBinaryToWriter(message: EnableFailure, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EnableFailure;
    static deserializeBinaryFromReader(message: EnableFailure, reader: jspb.BinaryReader): EnableFailure;
  }

  export namespace EnableFailure {
    export type AsObject = {
      serviceId: string,
      errorMessage: string,
    }
  }

}

export class BatchGetServicesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): BatchGetServicesRequest;

  getNamesList(): Array<string>;
  setNamesList(value: Array<string>): BatchGetServicesRequest;
  clearNamesList(): BatchGetServicesRequest;
  addNames(value: string, index?: number): BatchGetServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetServicesRequest): BatchGetServicesRequest.AsObject;
  static serializeBinaryToWriter(message: BatchGetServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetServicesRequest;
  static deserializeBinaryFromReader(message: BatchGetServicesRequest, reader: jspb.BinaryReader): BatchGetServicesRequest;
}

export namespace BatchGetServicesRequest {
  export type AsObject = {
    parent: string,
    namesList: Array<string>,
  }
}

export class BatchGetServicesResponse extends jspb.Message {
  getServicesList(): Array<google_api_serviceusage_v1_resources_pb.Service>;
  setServicesList(value: Array<google_api_serviceusage_v1_resources_pb.Service>): BatchGetServicesResponse;
  clearServicesList(): BatchGetServicesResponse;
  addServices(value?: google_api_serviceusage_v1_resources_pb.Service, index?: number): google_api_serviceusage_v1_resources_pb.Service;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetServicesResponse): BatchGetServicesResponse.AsObject;
  static serializeBinaryToWriter(message: BatchGetServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetServicesResponse;
  static deserializeBinaryFromReader(message: BatchGetServicesResponse, reader: jspb.BinaryReader): BatchGetServicesResponse;
}

export namespace BatchGetServicesResponse {
  export type AsObject = {
    servicesList: Array<google_api_serviceusage_v1_resources_pb.Service.AsObject>,
  }
}

