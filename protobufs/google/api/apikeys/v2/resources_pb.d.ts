import * as jspb from 'google-protobuf'

import * as google_api_field_behavior_pb from '../../../../google/api/field_behavior_pb';
import * as google_api_resource_pb from '../../../../google/api/resource_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class Key extends jspb.Message {
  getName(): string;
  setName(value: string): Key;

  getUid(): string;
  setUid(value: string): Key;

  getDisplayName(): string;
  setDisplayName(value: string): Key;

  getKeyString(): string;
  setKeyString(value: string): Key;

  getCreateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setCreateTime(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasCreateTime(): boolean;
  clearCreateTime(): Key;

  getUpdateTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setUpdateTime(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasUpdateTime(): boolean;
  clearUpdateTime(): Key;

  getDeleteTime(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDeleteTime(value?: google_protobuf_timestamp_pb.Timestamp): Key;
  hasDeleteTime(): boolean;
  clearDeleteTime(): Key;

  getAnnotationsMap(): jspb.Map<string, string>;
  clearAnnotationsMap(): Key;

  getRestrictions(): Restrictions | undefined;
  setRestrictions(value?: Restrictions): Key;
  hasRestrictions(): boolean;
  clearRestrictions(): Key;

  getEtag(): string;
  setEtag(value: string): Key;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Key.AsObject;
  static toObject(includeInstance: boolean, msg: Key): Key.AsObject;
  static serializeBinaryToWriter(message: Key, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Key;
  static deserializeBinaryFromReader(message: Key, reader: jspb.BinaryReader): Key;
}

export namespace Key {
  export type AsObject = {
    name: string,
    uid: string,
    displayName: string,
    keyString: string,
    createTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    updateTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    deleteTime?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    annotationsMap: Array<[string, string]>,
    restrictions?: Restrictions.AsObject,
    etag: string,
  }
}

export class Restrictions extends jspb.Message {
  getBrowserKeyRestrictions(): BrowserKeyRestrictions | undefined;
  setBrowserKeyRestrictions(value?: BrowserKeyRestrictions): Restrictions;
  hasBrowserKeyRestrictions(): boolean;
  clearBrowserKeyRestrictions(): Restrictions;

  getServerKeyRestrictions(): ServerKeyRestrictions | undefined;
  setServerKeyRestrictions(value?: ServerKeyRestrictions): Restrictions;
  hasServerKeyRestrictions(): boolean;
  clearServerKeyRestrictions(): Restrictions;

  getAndroidKeyRestrictions(): AndroidKeyRestrictions | undefined;
  setAndroidKeyRestrictions(value?: AndroidKeyRestrictions): Restrictions;
  hasAndroidKeyRestrictions(): boolean;
  clearAndroidKeyRestrictions(): Restrictions;

  getIosKeyRestrictions(): IosKeyRestrictions | undefined;
  setIosKeyRestrictions(value?: IosKeyRestrictions): Restrictions;
  hasIosKeyRestrictions(): boolean;
  clearIosKeyRestrictions(): Restrictions;

  getApiTargetsList(): Array<ApiTarget>;
  setApiTargetsList(value: Array<ApiTarget>): Restrictions;
  clearApiTargetsList(): Restrictions;
  addApiTargets(value?: ApiTarget, index?: number): ApiTarget;

  getClientRestrictionsCase(): Restrictions.ClientRestrictionsCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Restrictions.AsObject;
  static toObject(includeInstance: boolean, msg: Restrictions): Restrictions.AsObject;
  static serializeBinaryToWriter(message: Restrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Restrictions;
  static deserializeBinaryFromReader(message: Restrictions, reader: jspb.BinaryReader): Restrictions;
}

export namespace Restrictions {
  export type AsObject = {
    browserKeyRestrictions?: BrowserKeyRestrictions.AsObject,
    serverKeyRestrictions?: ServerKeyRestrictions.AsObject,
    androidKeyRestrictions?: AndroidKeyRestrictions.AsObject,
    iosKeyRestrictions?: IosKeyRestrictions.AsObject,
    apiTargetsList: Array<ApiTarget.AsObject>,
  }

  export enum ClientRestrictionsCase { 
    CLIENT_RESTRICTIONS_NOT_SET = 0,
    BROWSER_KEY_RESTRICTIONS = 1,
    SERVER_KEY_RESTRICTIONS = 2,
    ANDROID_KEY_RESTRICTIONS = 3,
    IOS_KEY_RESTRICTIONS = 4,
  }
}

export class BrowserKeyRestrictions extends jspb.Message {
  getAllowedReferrersList(): Array<string>;
  setAllowedReferrersList(value: Array<string>): BrowserKeyRestrictions;
  clearAllowedReferrersList(): BrowserKeyRestrictions;
  addAllowedReferrers(value: string, index?: number): BrowserKeyRestrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BrowserKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: BrowserKeyRestrictions): BrowserKeyRestrictions.AsObject;
  static serializeBinaryToWriter(message: BrowserKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BrowserKeyRestrictions;
  static deserializeBinaryFromReader(message: BrowserKeyRestrictions, reader: jspb.BinaryReader): BrowserKeyRestrictions;
}

export namespace BrowserKeyRestrictions {
  export type AsObject = {
    allowedReferrersList: Array<string>,
  }
}

export class ServerKeyRestrictions extends jspb.Message {
  getAllowedIpsList(): Array<string>;
  setAllowedIpsList(value: Array<string>): ServerKeyRestrictions;
  clearAllowedIpsList(): ServerKeyRestrictions;
  addAllowedIps(value: string, index?: number): ServerKeyRestrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ServerKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: ServerKeyRestrictions): ServerKeyRestrictions.AsObject;
  static serializeBinaryToWriter(message: ServerKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ServerKeyRestrictions;
  static deserializeBinaryFromReader(message: ServerKeyRestrictions, reader: jspb.BinaryReader): ServerKeyRestrictions;
}

export namespace ServerKeyRestrictions {
  export type AsObject = {
    allowedIpsList: Array<string>,
  }
}

export class AndroidKeyRestrictions extends jspb.Message {
  getAllowedApplicationsList(): Array<AndroidApplication>;
  setAllowedApplicationsList(value: Array<AndroidApplication>): AndroidKeyRestrictions;
  clearAllowedApplicationsList(): AndroidKeyRestrictions;
  addAllowedApplications(value?: AndroidApplication, index?: number): AndroidApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndroidKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: AndroidKeyRestrictions): AndroidKeyRestrictions.AsObject;
  static serializeBinaryToWriter(message: AndroidKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndroidKeyRestrictions;
  static deserializeBinaryFromReader(message: AndroidKeyRestrictions, reader: jspb.BinaryReader): AndroidKeyRestrictions;
}

export namespace AndroidKeyRestrictions {
  export type AsObject = {
    allowedApplicationsList: Array<AndroidApplication.AsObject>,
  }
}

export class AndroidApplication extends jspb.Message {
  getSha1Fingerprint(): string;
  setSha1Fingerprint(value: string): AndroidApplication;

  getPackageName(): string;
  setPackageName(value: string): AndroidApplication;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AndroidApplication.AsObject;
  static toObject(includeInstance: boolean, msg: AndroidApplication): AndroidApplication.AsObject;
  static serializeBinaryToWriter(message: AndroidApplication, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AndroidApplication;
  static deserializeBinaryFromReader(message: AndroidApplication, reader: jspb.BinaryReader): AndroidApplication;
}

export namespace AndroidApplication {
  export type AsObject = {
    sha1Fingerprint: string,
    packageName: string,
  }
}

export class IosKeyRestrictions extends jspb.Message {
  getAllowedBundleIdsList(): Array<string>;
  setAllowedBundleIdsList(value: Array<string>): IosKeyRestrictions;
  clearAllowedBundleIdsList(): IosKeyRestrictions;
  addAllowedBundleIds(value: string, index?: number): IosKeyRestrictions;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IosKeyRestrictions.AsObject;
  static toObject(includeInstance: boolean, msg: IosKeyRestrictions): IosKeyRestrictions.AsObject;
  static serializeBinaryToWriter(message: IosKeyRestrictions, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IosKeyRestrictions;
  static deserializeBinaryFromReader(message: IosKeyRestrictions, reader: jspb.BinaryReader): IosKeyRestrictions;
}

export namespace IosKeyRestrictions {
  export type AsObject = {
    allowedBundleIdsList: Array<string>,
  }
}

export class ApiTarget extends jspb.Message {
  getService(): string;
  setService(value: string): ApiTarget;

  getMethodsList(): Array<string>;
  setMethodsList(value: Array<string>): ApiTarget;
  clearMethodsList(): ApiTarget;
  addMethods(value: string, index?: number): ApiTarget;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ApiTarget.AsObject;
  static toObject(includeInstance: boolean, msg: ApiTarget): ApiTarget.AsObject;
  static serializeBinaryToWriter(message: ApiTarget, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ApiTarget;
  static deserializeBinaryFromReader(message: ApiTarget, reader: jspb.BinaryReader): ApiTarget;
}

export namespace ApiTarget {
  export type AsObject = {
    service: string,
    methodsList: Array<string>,
  }
}

