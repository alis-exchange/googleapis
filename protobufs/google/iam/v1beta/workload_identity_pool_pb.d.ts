import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class WorkloadIdentityPool extends jspb.Message {
  getName(): string;
  setName(value: string): WorkloadIdentityPool;

  getDisplayName(): string;
  setDisplayName(value: string): WorkloadIdentityPool;

  getDescription(): string;
  setDescription(value: string): WorkloadIdentityPool;

  getState(): WorkloadIdentityPool.State;
  setState(value: WorkloadIdentityPool.State): WorkloadIdentityPool;

  getDisabled(): boolean;
  setDisabled(value: boolean): WorkloadIdentityPool;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadIdentityPool.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadIdentityPool): WorkloadIdentityPool.AsObject;
  static serializeBinaryToWriter(message: WorkloadIdentityPool, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadIdentityPool;
  static deserializeBinaryFromReader(message: WorkloadIdentityPool, reader: jspb.BinaryReader): WorkloadIdentityPool;
}

export namespace WorkloadIdentityPool {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    state: WorkloadIdentityPool.State,
    disabled: boolean,
  }

  export enum State { 
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    DELETED = 2,
  }
}

export class WorkloadIdentityPoolProvider extends jspb.Message {
  getName(): string;
  setName(value: string): WorkloadIdentityPoolProvider;

  getDisplayName(): string;
  setDisplayName(value: string): WorkloadIdentityPoolProvider;

  getDescription(): string;
  setDescription(value: string): WorkloadIdentityPoolProvider;

  getState(): WorkloadIdentityPoolProvider.State;
  setState(value: WorkloadIdentityPoolProvider.State): WorkloadIdentityPoolProvider;

  getDisabled(): boolean;
  setDisabled(value: boolean): WorkloadIdentityPoolProvider;

  getAttributeMappingMap(): jspb.Map<string, string>;
  clearAttributeMappingMap(): WorkloadIdentityPoolProvider;

  getAttributeCondition(): string;
  setAttributeCondition(value: string): WorkloadIdentityPoolProvider;

  getAws(): WorkloadIdentityPoolProvider.Aws | undefined;
  setAws(value?: WorkloadIdentityPoolProvider.Aws): WorkloadIdentityPoolProvider;
  hasAws(): boolean;
  clearAws(): WorkloadIdentityPoolProvider;

  getOidc(): WorkloadIdentityPoolProvider.Oidc | undefined;
  setOidc(value?: WorkloadIdentityPoolProvider.Oidc): WorkloadIdentityPoolProvider;
  hasOidc(): boolean;
  clearOidc(): WorkloadIdentityPoolProvider;

  getProviderConfigCase(): WorkloadIdentityPoolProvider.ProviderConfigCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadIdentityPoolProvider.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadIdentityPoolProvider): WorkloadIdentityPoolProvider.AsObject;
  static serializeBinaryToWriter(message: WorkloadIdentityPoolProvider, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadIdentityPoolProvider;
  static deserializeBinaryFromReader(message: WorkloadIdentityPoolProvider, reader: jspb.BinaryReader): WorkloadIdentityPoolProvider;
}

export namespace WorkloadIdentityPoolProvider {
  export type AsObject = {
    name: string,
    displayName: string,
    description: string,
    state: WorkloadIdentityPoolProvider.State,
    disabled: boolean,
    attributeMappingMap: Array<[string, string]>,
    attributeCondition: string,
    aws?: WorkloadIdentityPoolProvider.Aws.AsObject,
    oidc?: WorkloadIdentityPoolProvider.Oidc.AsObject,
  }

  export class Aws extends jspb.Message {
    getAccountId(): string;
    setAccountId(value: string): Aws;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Aws.AsObject;
    static toObject(includeInstance: boolean, msg: Aws): Aws.AsObject;
    static serializeBinaryToWriter(message: Aws, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Aws;
    static deserializeBinaryFromReader(message: Aws, reader: jspb.BinaryReader): Aws;
  }

  export namespace Aws {
    export type AsObject = {
      accountId: string,
    }
  }


  export class Oidc extends jspb.Message {
    getIssuerUri(): string;
    setIssuerUri(value: string): Oidc;

    getAllowedAudiencesList(): Array<string>;
    setAllowedAudiencesList(value: Array<string>): Oidc;
    clearAllowedAudiencesList(): Oidc;
    addAllowedAudiences(value: string, index?: number): Oidc;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Oidc.AsObject;
    static toObject(includeInstance: boolean, msg: Oidc): Oidc.AsObject;
    static serializeBinaryToWriter(message: Oidc, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Oidc;
    static deserializeBinaryFromReader(message: Oidc, reader: jspb.BinaryReader): Oidc;
  }

  export namespace Oidc {
    export type AsObject = {
      issuerUri: string,
      allowedAudiencesList: Array<string>,
    }
  }


  export enum State { 
    STATE_UNSPECIFIED = 0,
    ACTIVE = 1,
    DELETED = 2,
  }

  export enum ProviderConfigCase { 
    PROVIDER_CONFIG_NOT_SET = 0,
    AWS = 8,
    OIDC = 9,
  }
}

export class ListWorkloadIdentityPoolsRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListWorkloadIdentityPoolsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWorkloadIdentityPoolsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListWorkloadIdentityPoolsRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListWorkloadIdentityPoolsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadIdentityPoolsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadIdentityPoolsRequest): ListWorkloadIdentityPoolsRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadIdentityPoolsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadIdentityPoolsRequest;
  static deserializeBinaryFromReader(message: ListWorkloadIdentityPoolsRequest, reader: jspb.BinaryReader): ListWorkloadIdentityPoolsRequest;
}

export namespace ListWorkloadIdentityPoolsRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    showDeleted: boolean,
  }
}

export class ListWorkloadIdentityPoolsResponse extends jspb.Message {
  getWorkloadIdentityPoolsList(): Array<WorkloadIdentityPool>;
  setWorkloadIdentityPoolsList(value: Array<WorkloadIdentityPool>): ListWorkloadIdentityPoolsResponse;
  clearWorkloadIdentityPoolsList(): ListWorkloadIdentityPoolsResponse;
  addWorkloadIdentityPools(value?: WorkloadIdentityPool, index?: number): WorkloadIdentityPool;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWorkloadIdentityPoolsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadIdentityPoolsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadIdentityPoolsResponse): ListWorkloadIdentityPoolsResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadIdentityPoolsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadIdentityPoolsResponse;
  static deserializeBinaryFromReader(message: ListWorkloadIdentityPoolsResponse, reader: jspb.BinaryReader): ListWorkloadIdentityPoolsResponse;
}

export namespace ListWorkloadIdentityPoolsResponse {
  export type AsObject = {
    workloadIdentityPoolsList: Array<WorkloadIdentityPool.AsObject>,
    nextPageToken: string,
  }
}

export class GetWorkloadIdentityPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetWorkloadIdentityPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkloadIdentityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkloadIdentityPoolRequest): GetWorkloadIdentityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkloadIdentityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkloadIdentityPoolRequest;
  static deserializeBinaryFromReader(message: GetWorkloadIdentityPoolRequest, reader: jspb.BinaryReader): GetWorkloadIdentityPoolRequest;
}

export namespace GetWorkloadIdentityPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateWorkloadIdentityPoolRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateWorkloadIdentityPoolRequest;

  getWorkloadIdentityPool(): WorkloadIdentityPool | undefined;
  setWorkloadIdentityPool(value?: WorkloadIdentityPool): CreateWorkloadIdentityPoolRequest;
  hasWorkloadIdentityPool(): boolean;
  clearWorkloadIdentityPool(): CreateWorkloadIdentityPoolRequest;

  getWorkloadIdentityPoolId(): string;
  setWorkloadIdentityPoolId(value: string): CreateWorkloadIdentityPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkloadIdentityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkloadIdentityPoolRequest): CreateWorkloadIdentityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkloadIdentityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkloadIdentityPoolRequest;
  static deserializeBinaryFromReader(message: CreateWorkloadIdentityPoolRequest, reader: jspb.BinaryReader): CreateWorkloadIdentityPoolRequest;
}

export namespace CreateWorkloadIdentityPoolRequest {
  export type AsObject = {
    parent: string,
    workloadIdentityPool?: WorkloadIdentityPool.AsObject,
    workloadIdentityPoolId: string,
  }
}

export class UpdateWorkloadIdentityPoolRequest extends jspb.Message {
  getWorkloadIdentityPool(): WorkloadIdentityPool | undefined;
  setWorkloadIdentityPool(value?: WorkloadIdentityPool): UpdateWorkloadIdentityPoolRequest;
  hasWorkloadIdentityPool(): boolean;
  clearWorkloadIdentityPool(): UpdateWorkloadIdentityPoolRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateWorkloadIdentityPoolRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateWorkloadIdentityPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkloadIdentityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkloadIdentityPoolRequest): UpdateWorkloadIdentityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkloadIdentityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkloadIdentityPoolRequest;
  static deserializeBinaryFromReader(message: UpdateWorkloadIdentityPoolRequest, reader: jspb.BinaryReader): UpdateWorkloadIdentityPoolRequest;
}

export namespace UpdateWorkloadIdentityPoolRequest {
  export type AsObject = {
    workloadIdentityPool?: WorkloadIdentityPool.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteWorkloadIdentityPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteWorkloadIdentityPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkloadIdentityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkloadIdentityPoolRequest): DeleteWorkloadIdentityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkloadIdentityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkloadIdentityPoolRequest;
  static deserializeBinaryFromReader(message: DeleteWorkloadIdentityPoolRequest, reader: jspb.BinaryReader): DeleteWorkloadIdentityPoolRequest;
}

export namespace DeleteWorkloadIdentityPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteWorkloadIdentityPoolRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteWorkloadIdentityPoolRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteWorkloadIdentityPoolRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteWorkloadIdentityPoolRequest): UndeleteWorkloadIdentityPoolRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteWorkloadIdentityPoolRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteWorkloadIdentityPoolRequest;
  static deserializeBinaryFromReader(message: UndeleteWorkloadIdentityPoolRequest, reader: jspb.BinaryReader): UndeleteWorkloadIdentityPoolRequest;
}

export namespace UndeleteWorkloadIdentityPoolRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListWorkloadIdentityPoolProvidersRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListWorkloadIdentityPoolProvidersRequest;

  getPageSize(): number;
  setPageSize(value: number): ListWorkloadIdentityPoolProvidersRequest;

  getPageToken(): string;
  setPageToken(value: string): ListWorkloadIdentityPoolProvidersRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListWorkloadIdentityPoolProvidersRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadIdentityPoolProvidersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadIdentityPoolProvidersRequest): ListWorkloadIdentityPoolProvidersRequest.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadIdentityPoolProvidersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadIdentityPoolProvidersRequest;
  static deserializeBinaryFromReader(message: ListWorkloadIdentityPoolProvidersRequest, reader: jspb.BinaryReader): ListWorkloadIdentityPoolProvidersRequest;
}

export namespace ListWorkloadIdentityPoolProvidersRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    showDeleted: boolean,
  }
}

export class ListWorkloadIdentityPoolProvidersResponse extends jspb.Message {
  getWorkloadIdentityPoolProvidersList(): Array<WorkloadIdentityPoolProvider>;
  setWorkloadIdentityPoolProvidersList(value: Array<WorkloadIdentityPoolProvider>): ListWorkloadIdentityPoolProvidersResponse;
  clearWorkloadIdentityPoolProvidersList(): ListWorkloadIdentityPoolProvidersResponse;
  addWorkloadIdentityPoolProviders(value?: WorkloadIdentityPoolProvider, index?: number): WorkloadIdentityPoolProvider;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListWorkloadIdentityPoolProvidersResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListWorkloadIdentityPoolProvidersResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListWorkloadIdentityPoolProvidersResponse): ListWorkloadIdentityPoolProvidersResponse.AsObject;
  static serializeBinaryToWriter(message: ListWorkloadIdentityPoolProvidersResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListWorkloadIdentityPoolProvidersResponse;
  static deserializeBinaryFromReader(message: ListWorkloadIdentityPoolProvidersResponse, reader: jspb.BinaryReader): ListWorkloadIdentityPoolProvidersResponse;
}

export namespace ListWorkloadIdentityPoolProvidersResponse {
  export type AsObject = {
    workloadIdentityPoolProvidersList: Array<WorkloadIdentityPoolProvider.AsObject>,
    nextPageToken: string,
  }
}

export class GetWorkloadIdentityPoolProviderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetWorkloadIdentityPoolProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWorkloadIdentityPoolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetWorkloadIdentityPoolProviderRequest): GetWorkloadIdentityPoolProviderRequest.AsObject;
  static serializeBinaryToWriter(message: GetWorkloadIdentityPoolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWorkloadIdentityPoolProviderRequest;
  static deserializeBinaryFromReader(message: GetWorkloadIdentityPoolProviderRequest, reader: jspb.BinaryReader): GetWorkloadIdentityPoolProviderRequest;
}

export namespace GetWorkloadIdentityPoolProviderRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateWorkloadIdentityPoolProviderRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateWorkloadIdentityPoolProviderRequest;

  getWorkloadIdentityPoolProvider(): WorkloadIdentityPoolProvider | undefined;
  setWorkloadIdentityPoolProvider(value?: WorkloadIdentityPoolProvider): CreateWorkloadIdentityPoolProviderRequest;
  hasWorkloadIdentityPoolProvider(): boolean;
  clearWorkloadIdentityPoolProvider(): CreateWorkloadIdentityPoolProviderRequest;

  getWorkloadIdentityPoolProviderId(): string;
  setWorkloadIdentityPoolProviderId(value: string): CreateWorkloadIdentityPoolProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateWorkloadIdentityPoolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateWorkloadIdentityPoolProviderRequest): CreateWorkloadIdentityPoolProviderRequest.AsObject;
  static serializeBinaryToWriter(message: CreateWorkloadIdentityPoolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateWorkloadIdentityPoolProviderRequest;
  static deserializeBinaryFromReader(message: CreateWorkloadIdentityPoolProviderRequest, reader: jspb.BinaryReader): CreateWorkloadIdentityPoolProviderRequest;
}

export namespace CreateWorkloadIdentityPoolProviderRequest {
  export type AsObject = {
    parent: string,
    workloadIdentityPoolProvider?: WorkloadIdentityPoolProvider.AsObject,
    workloadIdentityPoolProviderId: string,
  }
}

export class UpdateWorkloadIdentityPoolProviderRequest extends jspb.Message {
  getWorkloadIdentityPoolProvider(): WorkloadIdentityPoolProvider | undefined;
  setWorkloadIdentityPoolProvider(value?: WorkloadIdentityPoolProvider): UpdateWorkloadIdentityPoolProviderRequest;
  hasWorkloadIdentityPoolProvider(): boolean;
  clearWorkloadIdentityPoolProvider(): UpdateWorkloadIdentityPoolProviderRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateWorkloadIdentityPoolProviderRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateWorkloadIdentityPoolProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateWorkloadIdentityPoolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateWorkloadIdentityPoolProviderRequest): UpdateWorkloadIdentityPoolProviderRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateWorkloadIdentityPoolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateWorkloadIdentityPoolProviderRequest;
  static deserializeBinaryFromReader(message: UpdateWorkloadIdentityPoolProviderRequest, reader: jspb.BinaryReader): UpdateWorkloadIdentityPoolProviderRequest;
}

export namespace UpdateWorkloadIdentityPoolProviderRequest {
  export type AsObject = {
    workloadIdentityPoolProvider?: WorkloadIdentityPoolProvider.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteWorkloadIdentityPoolProviderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteWorkloadIdentityPoolProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteWorkloadIdentityPoolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteWorkloadIdentityPoolProviderRequest): DeleteWorkloadIdentityPoolProviderRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteWorkloadIdentityPoolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteWorkloadIdentityPoolProviderRequest;
  static deserializeBinaryFromReader(message: DeleteWorkloadIdentityPoolProviderRequest, reader: jspb.BinaryReader): DeleteWorkloadIdentityPoolProviderRequest;
}

export namespace DeleteWorkloadIdentityPoolProviderRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteWorkloadIdentityPoolProviderRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteWorkloadIdentityPoolProviderRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteWorkloadIdentityPoolProviderRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteWorkloadIdentityPoolProviderRequest): UndeleteWorkloadIdentityPoolProviderRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteWorkloadIdentityPoolProviderRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteWorkloadIdentityPoolProviderRequest;
  static deserializeBinaryFromReader(message: UndeleteWorkloadIdentityPoolProviderRequest, reader: jspb.BinaryReader): UndeleteWorkloadIdentityPoolProviderRequest;
}

export namespace UndeleteWorkloadIdentityPoolProviderRequest {
  export type AsObject = {
    name: string,
  }
}

export class WorkloadIdentityPoolOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadIdentityPoolOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadIdentityPoolOperationMetadata): WorkloadIdentityPoolOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: WorkloadIdentityPoolOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadIdentityPoolOperationMetadata;
  static deserializeBinaryFromReader(message: WorkloadIdentityPoolOperationMetadata, reader: jspb.BinaryReader): WorkloadIdentityPoolOperationMetadata;
}

export namespace WorkloadIdentityPoolOperationMetadata {
  export type AsObject = {
  }
}

export class WorkloadIdentityPoolProviderOperationMetadata extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WorkloadIdentityPoolProviderOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: WorkloadIdentityPoolProviderOperationMetadata): WorkloadIdentityPoolProviderOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: WorkloadIdentityPoolProviderOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WorkloadIdentityPoolProviderOperationMetadata;
  static deserializeBinaryFromReader(message: WorkloadIdentityPoolProviderOperationMetadata, reader: jspb.BinaryReader): WorkloadIdentityPoolProviderOperationMetadata;
}

export namespace WorkloadIdentityPoolProviderOperationMetadata {
  export type AsObject = {
  }
}

