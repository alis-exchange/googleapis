import * as jspb from 'google-protobuf'

import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class CheckError extends jspb.Message {
  getCode(): CheckError.Code;
  setCode(value: CheckError.Code): CheckError;

  getSubject(): string;
  setSubject(value: string): CheckError;

  getDetail(): string;
  setDetail(value: string): CheckError;

  getStatus(): google_rpc_status_pb.Status | undefined;
  setStatus(value?: google_rpc_status_pb.Status): CheckError;
  hasStatus(): boolean;
  clearStatus(): CheckError;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckError.AsObject;
  static toObject(includeInstance: boolean, msg: CheckError): CheckError.AsObject;
  static serializeBinaryToWriter(message: CheckError, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckError;
  static deserializeBinaryFromReader(message: CheckError, reader: jspb.BinaryReader): CheckError;
}

export namespace CheckError {
  export type AsObject = {
    code: CheckError.Code,
    subject: string,
    detail: string,
    status?: google_rpc_status_pb.Status.AsObject,
  }

  export enum Code { 
    ERROR_CODE_UNSPECIFIED = 0,
    NOT_FOUND = 5,
    PERMISSION_DENIED = 7,
    RESOURCE_EXHAUSTED = 8,
    SERVICE_NOT_ACTIVATED = 104,
    BILLING_DISABLED = 107,
    PROJECT_DELETED = 108,
    PROJECT_INVALID = 114,
    CONSUMER_INVALID = 125,
    IP_ADDRESS_BLOCKED = 109,
    REFERER_BLOCKED = 110,
    CLIENT_APP_BLOCKED = 111,
    API_TARGET_BLOCKED = 122,
    API_KEY_INVALID = 105,
    API_KEY_EXPIRED = 112,
    API_KEY_NOT_FOUND = 113,
    INVALID_CREDENTIAL = 123,
    NAMESPACE_LOOKUP_UNAVAILABLE = 300,
    SERVICE_STATUS_UNAVAILABLE = 301,
    BILLING_STATUS_UNAVAILABLE = 302,
    CLOUD_RESOURCE_MANAGER_BACKEND_UNAVAILABLE = 305,
  }
}

