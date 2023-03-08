import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_rpc_context_attribute_context_pb from '../../../../google/rpc/context/attribute_context_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class CheckRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): CheckRequest;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): CheckRequest;

  getAttributes(): google_rpc_context_attribute_context_pb.AttributeContext | undefined;
  setAttributes(value?: google_rpc_context_attribute_context_pb.AttributeContext): CheckRequest;
  hasAttributes(): boolean;
  clearAttributes(): CheckRequest;

  getResourcesList(): Array<ResourceInfo>;
  setResourcesList(value: Array<ResourceInfo>): CheckRequest;
  clearResourcesList(): CheckRequest;
  addResources(value?: ResourceInfo, index?: number): ResourceInfo;

  getFlags(): string;
  setFlags(value: string): CheckRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CheckRequest): CheckRequest.AsObject;
  static serializeBinaryToWriter(message: CheckRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckRequest;
  static deserializeBinaryFromReader(message: CheckRequest, reader: jspb.BinaryReader): CheckRequest;
}

export namespace CheckRequest {
  export type AsObject = {
    serviceName: string,
    serviceConfigId: string,
    attributes?: google_rpc_context_attribute_context_pb.AttributeContext.AsObject,
    resourcesList: Array<ResourceInfo.AsObject>,
    flags: string,
  }
}

export class ResourceInfo extends jspb.Message {
  getName(): string;
  setName(value: string): ResourceInfo;

  getType(): string;
  setType(value: string): ResourceInfo;

  getPermission(): string;
  setPermission(value: string): ResourceInfo;

  getContainer(): string;
  setContainer(value: string): ResourceInfo;

  getLocation(): string;
  setLocation(value: string): ResourceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ResourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ResourceInfo): ResourceInfo.AsObject;
  static serializeBinaryToWriter(message: ResourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ResourceInfo;
  static deserializeBinaryFromReader(message: ResourceInfo, reader: jspb.BinaryReader): ResourceInfo;
}

export namespace ResourceInfo {
  export type AsObject = {
    name: string,
    type: string,
    permission: string,
    container: string,
    location: string,
  }
}

export class CheckResponse extends jspb.Message {
  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): CheckResponse;
  hasStatus(): boolean;
  clearStatus(): CheckResponse;

  getHeadersMap(): jspb.Map<string, string>;
  clearHeadersMap(): CheckResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CheckResponse): CheckResponse.AsObject;
  static serializeBinaryToWriter(message: CheckResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckResponse;
  static deserializeBinaryFromReader(message: CheckResponse, reader: jspb.BinaryReader): CheckResponse;
}

export namespace CheckResponse {
  export type AsObject = {
    status?: google_rpc_status_pb.Status.AsObject,
    headersMap: Array<[string, string]>,
  }
}

export class ReportRequest extends jspb.Message {
  getServiceName(): string;
  setServiceName(value: string): ReportRequest;

  getServiceConfigId(): string;
  setServiceConfigId(value: string): ReportRequest;

  getOperationsList(): Array<google_rpc_context_attribute_context_pb.AttributeContext>;
  setOperationsList(value: Array<google_rpc_context_attribute_context_pb.AttributeContext>): ReportRequest;
  clearOperationsList(): ReportRequest;
  addOperations(value?: google_rpc_context_attribute_context_pb.AttributeContext, index?: number): google_rpc_context_attribute_context_pb.AttributeContext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReportRequest): ReportRequest.AsObject;
  static serializeBinaryToWriter(message: ReportRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportRequest;
  static deserializeBinaryFromReader(message: ReportRequest, reader: jspb.BinaryReader): ReportRequest;
}

export namespace ReportRequest {
  export type AsObject = {
    serviceName: string,
    serviceConfigId: string,
    operationsList: Array<google_rpc_context_attribute_context_pb.AttributeContext.AsObject>,
  }
}

export class ReportResponse extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReportResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReportResponse): ReportResponse.AsObject;
  static serializeBinaryToWriter(message: ReportResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReportResponse;
  static deserializeBinaryFromReader(message: ReportResponse, reader: jspb.BinaryReader): ReportResponse;
}

export namespace ReportResponse {
  export type AsObject = {
  }
}

