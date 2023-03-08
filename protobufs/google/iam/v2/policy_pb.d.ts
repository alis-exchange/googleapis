import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_iam_v2_deny_pb from '../../../google/iam/v2/deny_pb';
import * as google_longrunning_operations_pb from '../../../google/longrunning/operations_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Policy extends jspb.Message {
  getName(): string;
  setName(value: string): Policy;

  getUid(): string;
  setUid(value: string): Policy;

  getKind(): string;
  setKind(value: string): Policy;

  getDisplayName(): string;
  setDisplayName(value: string): Policy;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): Policy;

  getEtag(): string;
  setEtag(value: string): Policy;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Policy;
  hasCreateTime(): boolean;
  clearCreateTime(): Policy;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Policy;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Policy;

  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): Policy;
  hasDeleteTime(): boolean;
  clearDeleteTime(): Policy;

  getRulesList(): Array<PolicyRule>;
  setRulesList(value: Array<PolicyRule>): Policy;
  clearRulesList(): Policy;
  addRules(value?: PolicyRule, index?: number): PolicyRule;

  getManagingAuthority(): string;
  setManagingAuthority(value: string): Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    name: string,
    uid: string,
    kind: string,
    displayName: string,
    annotationsMap: Array<[string, string]>,
    etag: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    rulesList: Array<PolicyRule.AsObject>,
    managingAuthority: string,
  }
}

export class PolicyRule extends jspb.Message {
  getDenyRule(): google_iam_v2_deny_pb.DenyRule | undefined;
  setDenyRule(value?: google_iam_v2_deny_pb.DenyRule): PolicyRule;
  hasDenyRule(): boolean;
  clearDenyRule(): PolicyRule;

  getDescription(): string;
  setDescription(value: string): PolicyRule;

  getKindCase(): PolicyRule.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyRule.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyRule): PolicyRule.AsObject;
  static serializeBinaryToWriter(message: PolicyRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyRule;
  static deserializeBinaryFromReader(message: PolicyRule, reader: jspb.BinaryReader): PolicyRule;
}

export namespace PolicyRule {
  export type AsObject = {
    denyRule?: google_iam_v2_deny_pb.DenyRule.AsObject,
    description: string,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    DENY_RULE = 2,
  }
}

export class ListPoliciesRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): ListPoliciesRequest;

  getPageSize(): number;
  setPageSize(value: number): ListPoliciesRequest;

  getPageToken(): string;
  setPageToken(value: string): ListPoliciesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesRequest): ListPoliciesRequest.AsObject;
  static serializeBinaryToWriter(message: ListPoliciesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesRequest;
  static deserializeBinaryFromReader(message: ListPoliciesRequest, reader: jspb.BinaryReader): ListPoliciesRequest;
}

export namespace ListPoliciesRequest {
  export type AsObject = {
    parent: string,
    pageSize: number,
    pageToken: string,
  }
}

export class ListPoliciesResponse extends jspb.Message {
  getPoliciesList(): Array<Policy>;
  setPoliciesList(value: Array<Policy>): ListPoliciesResponse;
  clearPoliciesList(): ListPoliciesResponse;
  addPolicies(value?: Policy, index?: number): Policy;

  getNextPageToken(): string;
  setNextPageToken(value: string): ListPoliciesResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListPoliciesResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ListPoliciesResponse): ListPoliciesResponse.AsObject;
  static serializeBinaryToWriter(message: ListPoliciesResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListPoliciesResponse;
  static deserializeBinaryFromReader(message: ListPoliciesResponse, reader: jspb.BinaryReader): ListPoliciesResponse;
}

export namespace ListPoliciesResponse {
  export type AsObject = {
    policiesList: Array<Policy.AsObject>,
    nextPageToken: string,
  }
}

export class GetPolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): GetPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetPolicyRequest): GetPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: GetPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetPolicyRequest;
  static deserializeBinaryFromReader(message: GetPolicyRequest, reader: jspb.BinaryReader): GetPolicyRequest;
}

export namespace GetPolicyRequest {
  export type AsObject = {
    name: string,
  }
}

export class CreatePolicyRequest extends jspb.Message {
  getParent(): string;
  setParent(value: string): CreatePolicyRequest;

  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): CreatePolicyRequest;
  hasPolicy(): boolean;
  clearPolicy(): CreatePolicyRequest;

  getPolicyId(): string;
  setPolicyId(value: string): CreatePolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreatePolicyRequest): CreatePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: CreatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreatePolicyRequest;
  static deserializeBinaryFromReader(message: CreatePolicyRequest, reader: jspb.BinaryReader): CreatePolicyRequest;
}

export namespace CreatePolicyRequest {
  export type AsObject = {
    parent: string,
    policy?: Policy.AsObject,
    policyId: string,
  }
}

export class UpdatePolicyRequest extends jspb.Message {
  getPolicy(): Policy | undefined;
  setPolicy(value?: Policy): UpdatePolicyRequest;
  hasPolicy(): boolean;
  clearPolicy(): UpdatePolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdatePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdatePolicyRequest): UpdatePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: UpdatePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdatePolicyRequest;
  static deserializeBinaryFromReader(message: UpdatePolicyRequest, reader: jspb.BinaryReader): UpdatePolicyRequest;
}

export namespace UpdatePolicyRequest {
  export type AsObject = {
    policy?: Policy.AsObject,
  }
}

export class DeletePolicyRequest extends jspb.Message {
  getName(): string;
  setName(value: string): DeletePolicyRequest;

  getEtag(): string;
  setEtag(value: string): DeletePolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeletePolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeletePolicyRequest): DeletePolicyRequest.AsObject;
  static serializeBinaryToWriter(message: DeletePolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeletePolicyRequest;
  static deserializeBinaryFromReader(message: DeletePolicyRequest, reader: jspb.BinaryReader): DeletePolicyRequest;
}

export namespace DeletePolicyRequest {
  export type AsObject = {
    name: string,
    etag: string,
  }
}

export class PolicyOperationMetadata extends jspb.Message {
  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): PolicyOperationMetadata;
  hasCreateTime(): boolean;
  clearCreateTime(): PolicyOperationMetadata;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyOperationMetadata.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyOperationMetadata): PolicyOperationMetadata.AsObject;
  static serializeBinaryToWriter(message: PolicyOperationMetadata, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyOperationMetadata;
  static deserializeBinaryFromReader(message: PolicyOperationMetadata, reader: jspb.BinaryReader): PolicyOperationMetadata;
}

export namespace PolicyOperationMetadata {
  export type AsObject = {
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
  }
}

