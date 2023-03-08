import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_iam_v1_iam_policy_pb from '../../../../google/iam/v1/iam_policy_pb';
import * as google_iam_v1_policy_pb from '../../../../google/iam/v1/policy_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';
import * as google_type_expr_pb from '../../../../google/type/expr_pb';


export class ServiceAccount extends jspb.Message {
  getName(): string;
  setName(value: string): ServiceAccount;

  getProjectId(): string;
  setProjectId(value: string): ServiceAccount;

  getUniqueId(): string;
  setUniqueId(value: string): ServiceAccount;

  getEmail(): string;
  setEmail(value: string): ServiceAccount;

  getDisplayName(): string;
  setDisplayName(value: string): ServiceAccount;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): ServiceAccount;

  getDescription(): string;
  setDescription(value: string): ServiceAccount;

  getOauth2ClientId(): string;
  setOauth2ClientId(value: string): ServiceAccount;

  getDisabled(): boolean;
  setDisabled(value: boolean): ServiceAccount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccount.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccount): ServiceAccount.AsObject;
  static serializeBinaryToWriter(message: ServiceAccount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccount;
  static deserializeBinaryFromReader(message: ServiceAccount, reader: jspb.BinaryReader): ServiceAccount;
}

export namespace ServiceAccount {
  export type AsObject = {
    name: string,
    projectId: string,
    uniqueId: string,
    email: string,
    displayName: string,
    etag: Uint8Array | string,
    description: string,
    oauth2ClientId: string,
    disabled: boolean,
  }
}

export class CreateServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateServiceAccountRequest;

  getAccountId(): string;
  setAccountId(value: string): CreateServiceAccountRequest;

  getServiceAccount(): ServiceAccount | undefined;
  setServiceAccount(value?: ServiceAccount): CreateServiceAccountRequest;
  hasServiceAccount(): boolean;
  clearServiceAccount(): CreateServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceAccountRequest): CreateServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceAccountRequest;
  static deserializeBinaryFromReader(message: CreateServiceAccountRequest, reader: jspb.BinaryReader): CreateServiceAccountRequest;
}

export namespace CreateServiceAccountRequest {
  export type AsObject = {
    name: string,
    accountId: string,
    serviceAccount?: ServiceAccount.AsObject,
  }
}

export class ListServiceAccountsRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListServiceAccountsRequest;

  getPageSize(): number;
  setPageSize(value: number): ListServiceAccountsRequest;

  getPageToken(): string;
  setPageToken(value: string): ListServiceAccountsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountsRequest): ListServiceAccountsRequest.AsObject;
  static serializeBinaryToWriter(message: ListServiceAccountsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountsRequest;
  static deserializeBinaryFromReader(message: ListServiceAccountsRequest, reader: jspb.BinaryReader): ListServiceAccountsRequest;
}

export namespace ListServiceAccountsRequest {
  export type AsObject = {
    name: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListServiceAccountsResponse extends jspb.Message {
  getAccountsList(): Array<ServiceAccount>;
  setAccountsList(value: Array<ServiceAccount>): ListServiceAccountsResponse;
  clearAccountsList(): ListServiceAccountsResponse;
  addAccounts(value?: ServiceAccount, index?: number): ServiceAccount;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListServiceAccountsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountsResponse): ListServiceAccountsResponse.AsObject;
  static serializeBinaryToWriter(message: ListServiceAccountsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountsResponse;
  static deserializeBinaryFromReader(message: ListServiceAccountsResponse, reader: jspb.BinaryReader): ListServiceAccountsResponse;
}

export namespace ListServiceAccountsResponse {
  export type AsObject = {
    accountsList: Array<ServiceAccount.AsObject>,
    nextPageToken: string,
  }
}

export class GetServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceAccountRequest): GetServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceAccountRequest;
  static deserializeBinaryFromReader(message: GetServiceAccountRequest, reader: jspb.BinaryReader): GetServiceAccountRequest;
}

export namespace GetServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class DeleteServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceAccountRequest): DeleteServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountRequest;
  static deserializeBinaryFromReader(message: DeleteServiceAccountRequest, reader: jspb.BinaryReader): DeleteServiceAccountRequest;
}

export namespace DeleteServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class PatchServiceAccountRequest extends jspb.Message {
  getServiceAccount(): ServiceAccount | undefined;
  setServiceAccount(value?: ServiceAccount): PatchServiceAccountRequest;
  hasServiceAccount(): boolean;
  clearServiceAccount(): PatchServiceAccountRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): PatchServiceAccountRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): PatchServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PatchServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PatchServiceAccountRequest): PatchServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: PatchServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PatchServiceAccountRequest;
  static deserializeBinaryFromReader(message: PatchServiceAccountRequest, reader: jspb.BinaryReader): PatchServiceAccountRequest;
}

export namespace PatchServiceAccountRequest {
  export type AsObject = {
    serviceAccount?: ServiceAccount.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class UndeleteServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteServiceAccountRequest): UndeleteServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteServiceAccountRequest;
  static deserializeBinaryFromReader(message: UndeleteServiceAccountRequest, reader: jspb.BinaryReader): UndeleteServiceAccountRequest;
}

export namespace UndeleteServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class UndeleteServiceAccountResponse extends jspb.Message {
  getRestoredAccount(): ServiceAccount | undefined;
  setRestoredAccount(value?: ServiceAccount): UndeleteServiceAccountResponse;
  hasRestoredAccount(): boolean;
  clearRestoredAccount(): UndeleteServiceAccountResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteServiceAccountResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteServiceAccountResponse): UndeleteServiceAccountResponse.AsObject;
  static serializeBinaryToWriter(message: UndeleteServiceAccountResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteServiceAccountResponse;
  static deserializeBinaryFromReader(message: UndeleteServiceAccountResponse, reader: jspb.BinaryReader): UndeleteServiceAccountResponse;
}

export namespace UndeleteServiceAccountResponse {
  export type AsObject = {
    restoredAccount?: ServiceAccount.AsObject,
  }
}

export class EnableServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): EnableServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableServiceAccountRequest): EnableServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: EnableServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableServiceAccountRequest;
  static deserializeBinaryFromReader(message: EnableServiceAccountRequest, reader: jspb.BinaryReader): EnableServiceAccountRequest;
}

export namespace EnableServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class DisableServiceAccountRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DisableServiceAccountRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableServiceAccountRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableServiceAccountRequest): DisableServiceAccountRequest.AsObject;
  static serializeBinaryToWriter(message: DisableServiceAccountRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableServiceAccountRequest;
  static deserializeBinaryFromReader(message: DisableServiceAccountRequest, reader: jspb.BinaryReader): DisableServiceAccountRequest;
}

export namespace DisableServiceAccountRequest {
  export type AsObject = {
    name: string,
  }
}

export class ListServiceAccountKeysRequest extends jspb.Message {
  getName(): string;
  setName(value: string): ListServiceAccountKeysRequest;

  getKeyTypesList(): Array<ListServiceAccountKeysRequest.KeyType>;
  setKeyTypesList(value: Array<ListServiceAccountKeysRequest.KeyType>): ListServiceAccountKeysRequest;
  clearKeyTypesList(): ListServiceAccountKeysRequest;
  addKeyTypes(value: ListServiceAccountKeysRequest.KeyType, index?: number): ListServiceAccountKeysRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountKeysRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountKeysRequest): ListServiceAccountKeysRequest.AsObject;
  static serializeBinaryToWriter(message: ListServiceAccountKeysRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountKeysRequest;
  static deserializeBinaryFromReader(message: ListServiceAccountKeysRequest, reader: jspb.BinaryReader): ListServiceAccountKeysRequest;
}

export namespace ListServiceAccountKeysRequest {
  export type AsObject = {
    name: string,
    keyTypesList: Array<ListServiceAccountKeysRequest.KeyType>,
  }

  export enum KeyType { 
    KEY_TYPE_UNSPECIFIED = 0,
    USER_MANAGED = 1,
    SYSTEM_MANAGED = 2,
  }
}

export class ListServiceAccountKeysResponse extends jspb.Message {
  getKeysList(): Array<ServiceAccountKey>;
  setKeysList(value: Array<ServiceAccountKey>): ListServiceAccountKeysResponse;
  clearKeysList(): ListServiceAccountKeysResponse;
  addKeys(value?: ServiceAccountKey, index?: number): ServiceAccountKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListServiceAccountKeysResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListServiceAccountKeysResponse): ListServiceAccountKeysResponse.AsObject;
  static serializeBinaryToWriter(message: ListServiceAccountKeysResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListServiceAccountKeysResponse;
  static deserializeBinaryFromReader(message: ListServiceAccountKeysResponse, reader: jspb.BinaryReader): ListServiceAccountKeysResponse;
}

export namespace ListServiceAccountKeysResponse {
  export type AsObject = {
    keysList: Array<ServiceAccountKey.AsObject>,
  }
}

export class GetServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetServiceAccountKeyRequest;

  getPublicKeyType(): ServiceAccountPublicKeyType;
  setPublicKeyType(value: ServiceAccountPublicKeyType): GetServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetServiceAccountKeyRequest): GetServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: GetServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: GetServiceAccountKeyRequest, reader: jspb.BinaryReader): GetServiceAccountKeyRequest;
}

export namespace GetServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
    publicKeyType: ServiceAccountPublicKeyType,
  }
}

export class ServiceAccountKey extends jspb.Message {
  getName(): string;
  setName(value: string): ServiceAccountKey;

  getPrivateKeyType(): ServiceAccountPrivateKeyType;
  setPrivateKeyType(value: ServiceAccountPrivateKeyType): ServiceAccountKey;

  getKeyAlgorithm(): ServiceAccountKeyAlgorithm;
  setKeyAlgorithm(value: ServiceAccountKeyAlgorithm): ServiceAccountKey;

  getPrivateKeyData(): Uint8Array | string;
  getPrivateKeyData_asU8(): Uint8Array;
  getPrivateKeyData_asB64(): string;
  setPrivateKeyData(value: Uint8Array | string): ServiceAccountKey;

  getPublicKeyData(): Uint8Array | string;
  getPublicKeyData_asU8(): Uint8Array;
  getPublicKeyData_asB64(): string;
  setPublicKeyData(value: Uint8Array | string): ServiceAccountKey;

  getValidAfterTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidAfterTime(value?: google_protobuf_timestamp_pb.Timestamp): ServiceAccountKey;
  hasValidAfterTime(): boolean;
  clearValidAfterTime(): ServiceAccountKey;

  getValidBeforeTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setValidBeforeTime(value?: google_protobuf_timestamp_pb.Timestamp): ServiceAccountKey;
  hasValidBeforeTime(): boolean;
  clearValidBeforeTime(): ServiceAccountKey;

  getKeyOrigin(): ServiceAccountKeyOrigin;
  setKeyOrigin(value: ServiceAccountKeyOrigin): ServiceAccountKey;

  getKeyType(): ListServiceAccountKeysRequest.KeyType;
  setKeyType(value: ListServiceAccountKeysRequest.KeyType): ServiceAccountKey;

  getDisabled(): boolean;
  setDisabled(value: boolean): ServiceAccountKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServiceAccountKey.AsObject;
  static toObject(includeInstance: boolean, msg: ServiceAccountKey): ServiceAccountKey.AsObject;
  static serializeBinaryToWriter(message: ServiceAccountKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServiceAccountKey;
  static deserializeBinaryFromReader(message: ServiceAccountKey, reader: jspb.BinaryReader): ServiceAccountKey;
}

export namespace ServiceAccountKey {
  export type AsObject = {
    name: string,
    privateKeyType: ServiceAccountPrivateKeyType,
    keyAlgorithm: ServiceAccountKeyAlgorithm,
    privateKeyData: Uint8Array | string,
    publicKeyData: Uint8Array | string,
    validAfterTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    validBeforeTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    keyOrigin: ServiceAccountKeyOrigin,
    keyType: ListServiceAccountKeysRequest.KeyType,
    disabled: boolean,
  }
}

export class CreateServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): CreateServiceAccountKeyRequest;

  getPrivateKeyType(): ServiceAccountPrivateKeyType;
  setPrivateKeyType(value: ServiceAccountPrivateKeyType): CreateServiceAccountKeyRequest;

  getKeyAlgorithm(): ServiceAccountKeyAlgorithm;
  setKeyAlgorithm(value: ServiceAccountKeyAlgorithm): CreateServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateServiceAccountKeyRequest): CreateServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: CreateServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: CreateServiceAccountKeyRequest, reader: jspb.BinaryReader): CreateServiceAccountKeyRequest;
}

export namespace CreateServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
    privateKeyType: ServiceAccountPrivateKeyType,
    keyAlgorithm: ServiceAccountKeyAlgorithm,
  }
}

export class UploadServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UploadServiceAccountKeyRequest;

  getPublicKeyData(): Uint8Array | string;
  getPublicKeyData_asU8(): Uint8Array;
  getPublicKeyData_asB64(): string;
  setPublicKeyData(value: Uint8Array | string): UploadServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UploadServiceAccountKeyRequest): UploadServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: UploadServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: UploadServiceAccountKeyRequest, reader: jspb.BinaryReader): UploadServiceAccountKeyRequest;
}

export namespace UploadServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
    publicKeyData: Uint8Array | string,
  }
}

export class DeleteServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteServiceAccountKeyRequest): DeleteServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: DeleteServiceAccountKeyRequest, reader: jspb.BinaryReader): DeleteServiceAccountKeyRequest;
}

export namespace DeleteServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class DisableServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DisableServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DisableServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DisableServiceAccountKeyRequest): DisableServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: DisableServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DisableServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: DisableServiceAccountKeyRequest, reader: jspb.BinaryReader): DisableServiceAccountKeyRequest;
}

export namespace DisableServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class EnableServiceAccountKeyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): EnableServiceAccountKeyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EnableServiceAccountKeyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: EnableServiceAccountKeyRequest): EnableServiceAccountKeyRequest.AsObject;
  static serializeBinaryToWriter(message: EnableServiceAccountKeyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EnableServiceAccountKeyRequest;
  static deserializeBinaryFromReader(message: EnableServiceAccountKeyRequest, reader: jspb.BinaryReader): EnableServiceAccountKeyRequest;
}

export namespace EnableServiceAccountKeyRequest {
  export type AsObject = {
    name: string,
  }
}

export class SignBlobRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SignBlobRequest;

  getBytesToSign(): Uint8Array | string;
  getBytesToSign_asU8(): Uint8Array;
  getBytesToSign_asB64(): string;
  setBytesToSign(value: Uint8Array | string): SignBlobRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobRequest): SignBlobRequest.AsObject;
  static serializeBinaryToWriter(message: SignBlobRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobRequest;
  static deserializeBinaryFromReader(message: SignBlobRequest, reader: jspb.BinaryReader): SignBlobRequest;
}

export namespace SignBlobRequest {
  export type AsObject = {
    name: string,
    bytesToSign: Uint8Array | string,
  }
}

export class SignBlobResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): SignBlobResponse;

  getSignature(): Uint8Array | string;
  getSignature_asU8(): Uint8Array;
  getSignature_asB64(): string;
  setSignature(value: Uint8Array | string): SignBlobResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignBlobResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignBlobResponse): SignBlobResponse.AsObject;
  static serializeBinaryToWriter(message: SignBlobResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignBlobResponse;
  static deserializeBinaryFromReader(message: SignBlobResponse, reader: jspb.BinaryReader): SignBlobResponse;
}

export namespace SignBlobResponse {
  export type AsObject = {
    keyId: string,
    signature: Uint8Array | string,
  }
}

export class SignJwtRequest extends jspb.Message {
  getName(): string;
  setName(value: string): SignJwtRequest;

  getPayload(): string;
  setPayload(value: string): SignJwtRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtRequest): SignJwtRequest.AsObject;
  static serializeBinaryToWriter(message: SignJwtRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtRequest;
  static deserializeBinaryFromReader(message: SignJwtRequest, reader: jspb.BinaryReader): SignJwtRequest;
}

export namespace SignJwtRequest {
  export type AsObject = {
    name: string,
    payload: string,
  }
}

export class SignJwtResponse extends jspb.Message {
  getKeyId(): string;
  setKeyId(value: string): SignJwtResponse;

  getSignedJwt(): string;
  setSignedJwt(value: string): SignJwtResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SignJwtResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SignJwtResponse): SignJwtResponse.AsObject;
  static serializeBinaryToWriter(message: SignJwtResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SignJwtResponse;
  static deserializeBinaryFromReader(message: SignJwtResponse, reader: jspb.BinaryReader): SignJwtResponse;
}

export namespace SignJwtResponse {
  export type AsObject = {
    keyId: string,
    signedJwt: string,
  }
}

export class Role extends jspb.Message {
  getName(): string;
  setName(value: string): Role;

  getTitle(): string;
  setTitle(value: string): Role;

  getDescription(): string;
  setDescription(value: string): Role;

  getIncludedPermissionsList(): Array<string>;
  setIncludedPermissionsList(value: Array<string>): Role;
  clearIncludedPermissionsList(): Role;
  addIncludedPermissions(value: string, index?: number): Role;

  getStage(): Role.RoleLaunchStage;
  setStage(value: Role.RoleLaunchStage): Role;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): Role;

  getDeleted(): boolean;
  setDeleted(value: boolean): Role;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Role.AsObject;
  static toObject(includeInstance: boolean, msg: Role): Role.AsObject;
  static serializeBinaryToWriter(message: Role, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Role;
  static deserializeBinaryFromReader(message: Role, reader: jspb.BinaryReader): Role;
}

export namespace Role {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    includedPermissionsList: Array<string>,
    stage: Role.RoleLaunchStage,
    etag: Uint8Array | string,
    deleted: boolean,
  }

  export enum RoleLaunchStage { 
    ALPHA = 0,
    BETA = 1,
    GA = 2,
    DEPRECATED = 4,
    DISABLED = 5,
    EAP = 6,
  }
}

export class QueryGrantableRolesRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): QueryGrantableRolesRequest;

  getView(): RoleView;
  setView(value: RoleView): QueryGrantableRolesRequest;

  getPageSize(): number;
  setPageSize(value: number): QueryGrantableRolesRequest;

  getPageToken(): string;
  setPageToken(value: string): QueryGrantableRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantableRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantableRolesRequest): QueryGrantableRolesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryGrantableRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantableRolesRequest;
  static deserializeBinaryFromReader(message: QueryGrantableRolesRequest, reader: jspb.BinaryReader): QueryGrantableRolesRequest;
}

export namespace QueryGrantableRolesRequest {
  export type AsObject = {
    fullResourceName: string,
    view: RoleView,
    pageSize: number,
    pageToken: string,
  }
}

export class QueryGrantableRolesResponse extends jspb.Message {
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): QueryGrantableRolesResponse;
  clearRolesList(): QueryGrantableRolesResponse;
  addRoles(value?: Role, index?: number): Role;

  getNextPageToken(): string;
  setNextPageToken(value: string): QueryGrantableRolesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryGrantableRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryGrantableRolesResponse): QueryGrantableRolesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryGrantableRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryGrantableRolesResponse;
  static deserializeBinaryFromReader(message: QueryGrantableRolesResponse, reader: jspb.BinaryReader): QueryGrantableRolesResponse;
}

export namespace QueryGrantableRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
    nextPageToken: string,
  }
}

export class ListRolesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListRolesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListRolesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListRolesRequest;

  getView(): RoleView;
  setView(value: RoleView): ListRolesRequest;

  getShowDeleted(): boolean;
  setShowDeleted(value: boolean): ListRolesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesRequest): ListRolesRequest.AsObject;
  static serializeBinaryToWriter(message: ListRolesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesRequest;
  static deserializeBinaryFromReader(message: ListRolesRequest, reader: jspb.BinaryReader): ListRolesRequest;
}

export namespace ListRolesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
    view: RoleView,
    showDeleted: boolean,
  }
}

export class ListRolesResponse extends jspb.Message {
  getRolesList(): Array<Role>;
  setRolesList(value: Array<Role>): ListRolesResponse;
  clearRolesList(): ListRolesResponse;
  addRoles(value?: Role, index?: number): Role;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListRolesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRolesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListRolesResponse): ListRolesResponse.AsObject;
  static serializeBinaryToWriter(message: ListRolesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRolesResponse;
  static deserializeBinaryFromReader(message: ListRolesResponse, reader: jspb.BinaryReader): ListRolesResponse;
}

export namespace ListRolesResponse {
  export type AsObject = {
    rolesList: Array<Role.AsObject>,
    nextPageToken: string,
  }
}

export class GetRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetRoleRequest): GetRoleRequest.AsObject;
  static serializeBinaryToWriter(message: GetRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetRoleRequest;
  static deserializeBinaryFromReader(message: GetRoleRequest, reader: jspb.BinaryReader): GetRoleRequest;
}

export namespace GetRoleRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreateRoleRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreateRoleRequest;

  getRoleId(): string;
  setRoleId(value: string): CreateRoleRequest;

  getRole(): Role | undefined;
  setRole(value?: Role): CreateRoleRequest;
  hasRole(): boolean;
  clearRole(): CreateRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRoleRequest): CreateRoleRequest.AsObject;
  static serializeBinaryToWriter(message: CreateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRoleRequest;
  static deserializeBinaryFromReader(message: CreateRoleRequest, reader: jspb.BinaryReader): CreateRoleRequest;
}

export namespace CreateRoleRequest {
  export type AsObject = {
    parent: string,
    roleId: string,
    role?: Role.AsObject,
  }
}

export class UpdateRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UpdateRoleRequest;

  getRole(): Role | undefined;
  setRole(value?: Role): UpdateRoleRequest;
  hasRole(): boolean;
  clearRole(): UpdateRoleRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): UpdateRoleRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): UpdateRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRoleRequest): UpdateRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UpdateRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRoleRequest;
  static deserializeBinaryFromReader(message: UpdateRoleRequest, reader: jspb.BinaryReader): UpdateRoleRequest;
}

export namespace UpdateRoleRequest {
  export type AsObject = {
    name: string,
    role?: Role.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class DeleteRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeleteRoleRequest;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): DeleteRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRoleRequest): DeleteRoleRequest.AsObject;
  static serializeBinaryToWriter(message: DeleteRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRoleRequest;
  static deserializeBinaryFromReader(message: DeleteRoleRequest, reader: jspb.BinaryReader): DeleteRoleRequest;
}

export namespace DeleteRoleRequest {
  export type AsObject = {
    name: string,
    etag: Uint8Array | string,
  }
}

export class UndeleteRoleRequest extends jspb.Message {
  getName(): string;
  setName(value: string): UndeleteRoleRequest;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): UndeleteRoleRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UndeleteRoleRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UndeleteRoleRequest): UndeleteRoleRequest.AsObject;
  static serializeBinaryToWriter(message: UndeleteRoleRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UndeleteRoleRequest;
  static deserializeBinaryFromReader(message: UndeleteRoleRequest, reader: jspb.BinaryReader): UndeleteRoleRequest;
}

export namespace UndeleteRoleRequest {
  export type AsObject = {
    name: string,
    etag: Uint8Array | string,
  }
}

export class Permission extends jspb.Message {
  getName(): string;
  setName(value: string): Permission;

  getTitle(): string;
  setTitle(value: string): Permission;

  getDescription(): string;
  setDescription(value: string): Permission;

  getOnlyInPredefinedRoles(): boolean;
  setOnlyInPredefinedRoles(value: boolean): Permission;

  getStage(): Permission.PermissionLaunchStage;
  setStage(value: Permission.PermissionLaunchStage): Permission;

  getCustomRolesSupportLevel(): Permission.CustomRolesSupportLevel;
  setCustomRolesSupportLevel(value: Permission.CustomRolesSupportLevel): Permission;

  getApiDisabled(): boolean;
  setApiDisabled(value: boolean): Permission;

  getPrimaryPermission(): string;
  setPrimaryPermission(value: string): Permission;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Permission.AsObject;
  static toObject(includeInstance: boolean, msg: Permission): Permission.AsObject;
  static serializeBinaryToWriter(message: Permission, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Permission;
  static deserializeBinaryFromReader(message: Permission, reader: jspb.BinaryReader): Permission;
}

export namespace Permission {
  export type AsObject = {
    name: string,
    title: string,
    description: string,
    onlyInPredefinedRoles: boolean,
    stage: Permission.PermissionLaunchStage,
    customRolesSupportLevel: Permission.CustomRolesSupportLevel,
    apiDisabled: boolean,
    primaryPermission: string,
  }

  export enum PermissionLaunchStage { 
    ALPHA = 0,
    BETA = 1,
    GA = 2,
    DEPRECATED = 3,
  }

  export enum CustomRolesSupportLevel { 
    SUPPORTED = 0,
    TESTING = 1,
    NOT_SUPPORTED = 2,
  }
}

export class QueryTestablePermissionsRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): QueryTestablePermissionsRequest;

  getPageSize(): number;
  setPageSize(value: number): QueryTestablePermissionsRequest;

  getPageToken(): string;
  setPageToken(value: string): QueryTestablePermissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTestablePermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTestablePermissionsRequest): QueryTestablePermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: QueryTestablePermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTestablePermissionsRequest;
  static deserializeBinaryFromReader(message: QueryTestablePermissionsRequest, reader: jspb.BinaryReader): QueryTestablePermissionsRequest;
}

export namespace QueryTestablePermissionsRequest {
  export type AsObject = {
    fullResourceName: string,
    pageSize: number,
    pageToken: string,
  }
}

export class QueryTestablePermissionsResponse extends jspb.Message {
  getPermissionsList(): Array<Permission>;
  setPermissionsList(value: Array<Permission>): QueryTestablePermissionsResponse;
  clearPermissionsList(): QueryTestablePermissionsResponse;
  addPermissions(value?: Permission, index?: number): Permission;

  getNextPageToken(): string;
  setNextPageToken(value: string): QueryTestablePermissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryTestablePermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryTestablePermissionsResponse): QueryTestablePermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: QueryTestablePermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryTestablePermissionsResponse;
  static deserializeBinaryFromReader(message: QueryTestablePermissionsResponse, reader: jspb.BinaryReader): QueryTestablePermissionsResponse;
}

export namespace QueryTestablePermissionsResponse {
  export type AsObject = {
    permissionsList: Array<Permission.AsObject>,
    nextPageToken: string,
  }
}

export class QueryAuditableServicesRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): QueryAuditableServicesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuditableServicesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuditableServicesRequest): QueryAuditableServicesRequest.AsObject;
  static serializeBinaryToWriter(message: QueryAuditableServicesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuditableServicesRequest;
  static deserializeBinaryFromReader(message: QueryAuditableServicesRequest, reader: jspb.BinaryReader): QueryAuditableServicesRequest;
}

export namespace QueryAuditableServicesRequest {
  export type AsObject = {
    fullResourceName: string,
  }
}

export class QueryAuditableServicesResponse extends jspb.Message {
  getServicesList(): Array<QueryAuditableServicesResponse.AuditableService>;
  setServicesList(value: Array<QueryAuditableServicesResponse.AuditableService>): QueryAuditableServicesResponse;
  clearServicesList(): QueryAuditableServicesResponse;
  addServices(value?: QueryAuditableServicesResponse.AuditableService, index?: number): QueryAuditableServicesResponse.AuditableService;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QueryAuditableServicesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: QueryAuditableServicesResponse): QueryAuditableServicesResponse.AsObject;
  static serializeBinaryToWriter(message: QueryAuditableServicesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QueryAuditableServicesResponse;
  static deserializeBinaryFromReader(message: QueryAuditableServicesResponse, reader: jspb.BinaryReader): QueryAuditableServicesResponse;
}

export namespace QueryAuditableServicesResponse {
  export type AsObject = {
    servicesList: Array<QueryAuditableServicesResponse.AuditableService.AsObject>,
  }

  export class AuditableService extends jspb.Message {
    getName(): string;
    setName(value: string): AuditableService;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AuditableService.AsObject;
    static toObject(includeInstance: boolean, msg: AuditableService): AuditableService.AsObject;
    static serializeBinaryToWriter(message: AuditableService, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AuditableService;
    static deserializeBinaryFromReader(message: AuditableService, reader: jspb.BinaryReader): AuditableService;
  }

  export namespace AuditableService {
    export type AsObject = {
      name: string,
    }
  }

}

export class LintPolicyRequest extends jspb.Message {
  getFullResourceName(): string;
  setFullResourceName(value: string): LintPolicyRequest;

  getCondition(): google_type_expr_pb.Expr | undefined;
  setCondition(value?: google_type_expr_pb.Expr): LintPolicyRequest;
  hasCondition(): boolean;
  clearCondition(): LintPolicyRequest;

  getLintObjectCase(): LintPolicyRequest.LintObjectCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LintPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: LintPolicyRequest): LintPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: LintPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LintPolicyRequest;
  static deserializeBinaryFromReader(message: LintPolicyRequest, reader: jspb.BinaryReader): LintPolicyRequest;
}

export namespace LintPolicyRequest {
  export type AsObject = {
    fullResourceName: string,
    condition?: google_type_expr_pb.Expr.AsObject,
  }

  export enum LintObjectCase { 
    LINT_OBJECT_NOT_SET = 0,
    CONDITION = 5,
  }
}

export class LintResult extends jspb.Message {
  getLevel(): LintResult.Level;
  setLevel(value: LintResult.Level): LintResult;

  getValidationUnitName(): string;
  setValidationUnitName(value: string): LintResult;

  getSeverity(): LintResult.Severity;
  setSeverity(value: LintResult.Severity): LintResult;

  getFieldName(): string;
  setFieldName(value: string): LintResult;

  getLocationOffset(): number;
  setLocationOffset(value: number): LintResult;

  getDebugMessage(): string;
  setDebugMessage(value: string): LintResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LintResult.AsObject;
  static toObject(includeInstance: boolean, msg: LintResult): LintResult.AsObject;
  static serializeBinaryToWriter(message: LintResult, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LintResult;
  static deserializeBinaryFromReader(message: LintResult, reader: jspb.BinaryReader): LintResult;
}

export namespace LintResult {
  export type AsObject = {
    level: LintResult.Level,
    validationUnitName: string,
    severity: LintResult.Severity,
    fieldName: string,
    locationOffset: number,
    debugMessage: string,
  }

  export enum Level { 
    LEVEL_UNSPECIFIED = 0,
    CONDITION = 3,
  }

  export enum Severity { 
    SEVERITY_UNSPECIFIED = 0,
    ERROR = 1,
    WARNING = 2,
    NOTICE = 3,
    INFO = 4,
    DEPRECATED = 5,
  }
}

export class LintPolicyResponse extends jspb.Message {
  getLintResultsList(): Array<LintResult>;
  setLintResultsList(value: Array<LintResult>): LintPolicyResponse;
  clearLintResultsList(): LintPolicyResponse;
  addLintResults(value?: LintResult, index?: number): LintResult;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LintPolicyResponse.AsObject;
  static toObject(includeInstance: boolean, msg: LintPolicyResponse): LintPolicyResponse.AsObject;
  static serializeBinaryToWriter(message: LintPolicyResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LintPolicyResponse;
  static deserializeBinaryFromReader(message: LintPolicyResponse, reader: jspb.BinaryReader): LintPolicyResponse;
}

export namespace LintPolicyResponse {
  export type AsObject = {
    lintResultsList: Array<LintResult.AsObject>,
  }
}

export enum ServiceAccountKeyAlgorithm { 
  KEY_ALG_UNSPECIFIED = 0,
  KEY_ALG_RSA_1024 = 1,
  KEY_ALG_RSA_2048 = 2,
}
export enum ServiceAccountPrivateKeyType { 
  TYPE_UNSPECIFIED = 0,
  TYPE_PKCS12_FILE = 1,
  TYPE_GOOGLE_CREDENTIALS_FILE = 2,
}
export enum ServiceAccountPublicKeyType { 
  TYPE_NONE = 0,
  TYPE_X509_PEM_FILE = 1,
  TYPE_RAW_PUBLIC_KEY = 2,
}
export enum ServiceAccountKeyOrigin { 
  ORIGIN_UNSPECIFIED = 0,
  USER_PROVIDED = 1,
  GOOGLE_PROVIDED = 2,
}
export enum RoleView { 
  BASIC = 0,
  FULL = 1,
}
