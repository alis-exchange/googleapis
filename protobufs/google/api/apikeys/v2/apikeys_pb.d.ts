import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_apikeys_v2_resources_pb from '../../../../google/api/apikeys/v2/resources_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_longrunning_operations_pb from '../../../../google/longrunning/operations_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class CreateKeyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateKeyRequest;

  getKey(): google_api_apikeys_v2_resources_pb.Key | undefined;
  setKey(value?: google_api_apikeys_v2_resources_pb.Key): CreateKeyRequest;
  hasKey(): boolean;
  clearKey(): CreateKeyRequest;

  getKeyId(): string;
  setKeyId(value: string): CreateKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateKeyRequest): CreateKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateKeyRequest;
  static deserializeBinaryFromReader(message: CreateKeyRequest, reader: jspb.BinaryReader): CreateKeyRequest;
}

export namespace CreateKeyRequest {
  export type AsObject = {
    parent: string,
    key?: google_api_apikeys_v2_resources_pb.Key.AsObject,
    keyId: string,
  }
}

export class ListKeysRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListKeysRequest;

  getPageSize(): number;
  setPageSize(value: number): ListKeysRequest;

  getPageToken(): string;
  setPageToken(value: string): ListKeysRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysRequest): ListKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysRequest;
  static deserializeBinaryFromReader(message: ListKeysRequest, reader: jspb.BinaryReader): ListKeysRequest;
}

export namespace ListKeysRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    showDeleted: boolean,
  }
}

export class ListKeysResponse extends jspb.Message {
  getKeysList(): Array<google_api_apikeys_v2_resources_pb.Key>;
  setKeysList(value: Array<google_api_apikeys_v2_resources_pb.Key>): ListKeysResponse;
  clearKeysList(): ListKeysResponse;
  addKeys(value?: google_api_apikeys_v2_resources_pb.Key, index?: number): google_api_apikeys_v2_resources_pb.Key;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListKeysResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListKeysResponse): ListKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListKeysResponse;
  static deserializeBinaryFromReader(message: ListKeysResponse, reader: jspb.BinaryReader): ListKeysResponse;
}

export namespace ListKeysResponse {
  export type AsObject = {
    keysList: Array<google_api_apikeys_v2_resources_pb.Key.AsObject>,
    nextPageToken: string,
  }
}

export class GetKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyRequest): GetKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyRequest;
  static deserializeBinaryFromReader(message: GetKeyRequest, reader: jspb.BinaryReader): GetKeyRequest;
}

export namespace GetKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetKeyStringRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetKeyStringRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyStringRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyStringRequest): GetKeyStringRequest.AsObject;
  static serializeBinaryToWriter(message: GetKeyStringRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyStringRequest;
  static deserializeBinaryFromReader(message: GetKeyStringRequest, reader: jspb.BinaryReader): GetKeyStringRequest;
}

export namespace GetKeyStringRequest {
  export type AsObject = {
    name: string,
  }
}

export class GetKeyStringResponse extends jspb.Message {
  getKeyString(): string;
  setKeyString(value: string): GetKeyStringResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetKeyStringResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetKeyStringResponse): GetKeyStringResponse.AsObject;
  static serializeBinaryToWriter(message: GetKeyStringResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetKeyStringResponse;
  static deserializeBinaryFromReader(message: GetKeyStringResponse, reader: jspb.BinaryReader): GetKeyStringResponse;
}

export namespace GetKeyStringResponse {
  export type AsObject = {
    keyString: string,
  }
}

export class UpdateKeyRequest extends jspb.Message {
  getKey(): google_api_apikeys_v2_resources_pb.Key | undefined;
  setKey(value?: google_api_apikeys_v2_resources_pb.Key): UpdateKeyRequest;
  hasKey(): boolean;
  clearKey(): UpdateKeyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateKeyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateKeyRequest): UpdateKeyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateKeyRequest;
  static deserializeBinaryFromReader(message: UpdateKeyRequest, reader: jspb.BinaryReader): UpdateKeyRequest;
}

export namespace UpdateKeyRequest {
  export type AsObject = {
    key?: google_api_apikeys_v2_resources_pb.Key.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteKeyRequest;

  getEtag(): string;
  setEtag(value: string): DeleteKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteKeyRequest): DeleteKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteKeyRequest;
  static deserializeBinaryFromReader(message: DeleteKeyRequest, reader: jspb.BinaryReader): DeleteKeyRequest;
}

export namespace DeleteKeyRequest {
  export type AsObject = {
    name: string,
    etag: string,
  }
}

export class UndeleteKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteKeyRequest): UndeleteKeyRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteKeyRequest;
  static deserializeBinaryFromReader(message: UndeleteKeyRequest, reader: jspb.BinaryReader): UndeleteKeyRequest;
}

export namespace UndeleteKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class LookupKeyRequest extends jspb.Message {
  getKeyString(): string;
  setKeyString(value: string): LookupKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LookupKeyRequest): LookupKeyRequest.AsObject;
  static serializeBinaryToWriter(message: LookupKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupKeyRequest;
  static deserializeBinaryFromReader(message: LookupKeyRequest, reader: jspb.BinaryReader): LookupKeyRequest;
}

export namespace LookupKeyRequest {
  export type AsObject = {
    keyString: string,
  }
}

export class LookupKeyResponse extends jspb.Message {
  getParent(): string;
  setParent(value: string): LookupKeyResponse;

  getName(): string;
  setName(value: string): LookupKeyResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LookupKeyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LookupKeyResponse): LookupKeyResponse.AsObject;
  static serializeBinaryToWriter(message: LookupKeyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LookupKeyResponse;
  static deserializeBinaryFromReader(message: LookupKeyResponse, reader: jspb.BinaryReader): LookupKeyResponse;
}

export namespace LookupKeyResponse {
  export type AsObject = {
    parent: string,
    name: string,
  }
}

