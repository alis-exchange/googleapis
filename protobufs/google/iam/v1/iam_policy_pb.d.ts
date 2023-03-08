import * as jspb from 'google-protobuf'

import * as google_api_annotations_pb from '../../../google/api/annotations_pb';
import * as google_api_client_pb from '../../../google/api/client_pb';
import * as google_api_field_behavior_pb from '../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../google/api/resource_pb';
import * as google_iam_v1_options_pb from '../../../google/iam/v1/options_pb';
import * as google_iam_v1_policy_pb from '../../../google/iam/v1/policy_pb';
import * as google_protobuf_field_mask_pb from 'google-protobuf/google/protobuf/field_mask_pb';


export class SetIamPolicyRequest extends jspb.Message {
  getResource(): string;
  setResource(value: string): SetIamPolicyRequest;

  getPolicy(): google_iam_v1_policy_pb.Policy | undefined;
  setPolicy(value?: google_iam_v1_policy_pb.Policy): SetIamPolicyRequest;
  hasPolicy(): boolean;
  clearPolicy(): SetIamPolicyRequest;

  getUpdateMask(): google_protobuf_field_mask_pb.FieldMask | undefined;
  setUpdateMask(value?: google_protobuf_field_mask_pb.FieldMask): SetIamPolicyRequest;
  hasUpdateMask(): boolean;
  clearUpdateMask(): SetIamPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SetIamPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SetIamPolicyRequest): SetIamPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: SetIamPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SetIamPolicyRequest;
  static deserializeBinaryFromReader(message: SetIamPolicyRequest, reader: jspb.BinaryReader): SetIamPolicyRequest;
}

export namespace SetIamPolicyRequest {
  export type AsObject = {
    resource: string,
    policy?: google_iam_v1_policy_pb.Policy.AsObject,
    updateMask?: google_protobuf_field_mask_pb.FieldMask.AsObject,
  }
}

export class GetIamPolicyRequest extends jspb.Message {
  getResource(): string;
  setResource(value: string): GetIamPolicyRequest;

  getOptions(): google_iam_v1_options_pb.GetPolicyOptions | undefined;
  setOptions(value?: google_iam_v1_options_pb.GetPolicyOptions): GetIamPolicyRequest;
  hasOptions(): boolean;
  clearOptions(): GetIamPolicyRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetIamPolicyRequest.AsObject;
  static toObject(includeInstance: boolean, msg: GetIamPolicyRequest): GetIamPolicyRequest.AsObject;
  static serializeBinaryToWriter(message: GetIamPolicyRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetIamPolicyRequest;
  static deserializeBinaryFromReader(message: GetIamPolicyRequest, reader: jspb.BinaryReader): GetIamPolicyRequest;
}

export namespace GetIamPolicyRequest {
  export type AsObject = {
    resource: string,
    options?: google_iam_v1_options_pb.GetPolicyOptions.AsObject,
  }
}

export class TestIamPermissionsRequest extends jspb.Message {
  getResource(): string;
  setResource(value: string): TestIamPermissionsRequest;

  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): TestIamPermissionsRequest;
  clearPermissionsList(): TestIamPermissionsRequest;
  addPermissions(value: string, index?: number): TestIamPermissionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestIamPermissionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TestIamPermissionsRequest): TestIamPermissionsRequest.AsObject;
  static serializeBinaryToWriter(message: TestIamPermissionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestIamPermissionsRequest;
  static deserializeBinaryFromReader(message: TestIamPermissionsRequest, reader: jspb.BinaryReader): TestIamPermissionsRequest;
}

export namespace TestIamPermissionsRequest {
  export type AsObject = {
    resource: string,
    permissionsList: Array<string>,
  }
}

export class TestIamPermissionsResponse extends jspb.Message {
  getPermissionsList(): Array<string>;
  setPermissionsList(value: Array<string>): TestIamPermissionsResponse;
  clearPermissionsList(): TestIamPermissionsResponse;
  addPermissions(value: string, index?: number): TestIamPermissionsResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TestIamPermissionsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TestIamPermissionsResponse): TestIamPermissionsResponse.AsObject;
  static serializeBinaryToWriter(message: TestIamPermissionsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TestIamPermissionsResponse;
  static deserializeBinaryFromReader(message: TestIamPermissionsResponse, reader: jspb.BinaryReader): TestIamPermissionsResponse;
}

export namespace TestIamPermissionsResponse {
  export type AsObject = {
    permissionsList: Array<string>,
  }
}

