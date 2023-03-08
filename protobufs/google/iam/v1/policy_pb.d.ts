import * as jspb from 'google-protobuf'

import * as google_type_expr_pb from '../../../google/type/expr_pb';


export class Policy extends jspb.Message {
  getVersion(): number;
  setVersion(value: number): Policy;

  getBindingsList(): Array<Binding>;
  setBindingsList(value: Array<Binding>): Policy;
  clearBindingsList(): Policy;
  addBindings(value?: Binding, index?: number): Binding;

  getAuditConfigsList(): Array<AuditConfig>;
  setAuditConfigsList(value: Array<AuditConfig>): Policy;
  clearAuditConfigsList(): Policy;
  addAuditConfigs(value?: AuditConfig, index?: number): AuditConfig;

  getEtag(): Uint8Array | string;
  getEtag_asU8(): Uint8Array;
  getEtag_asB64(): string;
  setEtag(value: Uint8Array | string): Policy;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Policy.AsObject;
  static toObject(includeInstance: boolean, msg: Policy): Policy.AsObject;
  static serializeBinaryToWriter(message: Policy, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Policy;
  static deserializeBinaryFromReader(message: Policy, reader: jspb.BinaryReader): Policy;
}

export namespace Policy {
  export type AsObject = {
    version: number,
    bindingsList: Array<Binding.AsObject>,
    auditConfigsList: Array<AuditConfig.AsObject>,
    etag: Uint8Array | string,
  }
}

export class Binding extends jspb.Message {
  getRole(): string;
  setRole(value: string): Binding;

  getMembersList(): Array<string>;
  setMembersList(value: Array<string>): Binding;
  clearMembersList(): Binding;
  addMembers(value: string, index?: number): Binding;

  getCondition(): google_type_expr_pb.Expr | undefined;
  setCondition(value?: google_type_expr_pb.Expr): Binding;
  hasCondition(): boolean;
  clearCondition(): Binding;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Binding.AsObject;
  static toObject(includeInstance: boolean, msg: Binding): Binding.AsObject;
  static serializeBinaryToWriter(message: Binding, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Binding;
  static deserializeBinaryFromReader(message: Binding, reader: jspb.BinaryReader): Binding;
}

export namespace Binding {
  export type AsObject = {
    role: string,
    membersList: Array<string>,
    condition?: google_type_expr_pb.Expr.AsObject,
  }
}

export class AuditConfig extends jspb.Message {
  getService(): string;
  setService(value: string): AuditConfig;

  getAuditLogConfigsList(): Array<AuditLogConfig>;
  setAuditLogConfigsList(value: Array<AuditLogConfig>): AuditConfig;
  clearAuditLogConfigsList(): AuditConfig;
  addAuditLogConfigs(value?: AuditLogConfig, index?: number): AuditLogConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuditConfig): AuditConfig.AsObject;
  static serializeBinaryToWriter(message: AuditConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditConfig;
  static deserializeBinaryFromReader(message: AuditConfig, reader: jspb.BinaryReader): AuditConfig;
}

export namespace AuditConfig {
  export type AsObject = {
    service: string,
    auditLogConfigsList: Array<AuditLogConfig.AsObject>,
  }
}

export class AuditLogConfig extends jspb.Message {
  getLogType(): AuditLogConfig.LogType;
  setLogType(value: AuditLogConfig.LogType): AuditLogConfig;

  getExemptedMembersList(): Array<string>;
  setExemptedMembersList(value: Array<string>): AuditLogConfig;
  clearExemptedMembersList(): AuditLogConfig;
  addExemptedMembers(value: string, index?: number): AuditLogConfig;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditLogConfig.AsObject;
  static toObject(includeInstance: boolean, msg: AuditLogConfig): AuditLogConfig.AsObject;
  static serializeBinaryToWriter(message: AuditLogConfig, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditLogConfig;
  static deserializeBinaryFromReader(message: AuditLogConfig, reader: jspb.BinaryReader): AuditLogConfig;
}

export namespace AuditLogConfig {
  export type AsObject = {
    logType: AuditLogConfig.LogType,
    exemptedMembersList: Array<string>,
  }

  export enum LogType { 
    LOG_TYPE_UNSPECIFIED = 0,
    ADMIN_READ = 1,
    DATA_WRITE = 2,
    DATA_READ = 3,
  }
}

export class PolicyDelta extends jspb.Message {
  getBindingDeltasList(): Array<BindingDelta>;
  setBindingDeltasList(value: Array<BindingDelta>): PolicyDelta;
  clearBindingDeltasList(): PolicyDelta;
  addBindingDeltas(value?: BindingDelta, index?: number): BindingDelta;

  getAuditConfigDeltasList(): Array<AuditConfigDelta>;
  setAuditConfigDeltasList(value: Array<AuditConfigDelta>): PolicyDelta;
  clearAuditConfigDeltasList(): PolicyDelta;
  addAuditConfigDeltas(value?: AuditConfigDelta, index?: number): AuditConfigDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PolicyDelta.AsObject;
  static toObject(includeInstance: boolean, msg: PolicyDelta): PolicyDelta.AsObject;
  static serializeBinaryToWriter(message: PolicyDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PolicyDelta;
  static deserializeBinaryFromReader(message: PolicyDelta, reader: jspb.BinaryReader): PolicyDelta;
}

export namespace PolicyDelta {
  export type AsObject = {
    bindingDeltasList: Array<BindingDelta.AsObject>,
    auditConfigDeltasList: Array<AuditConfigDelta.AsObject>,
  }
}

export class BindingDelta extends jspb.Message {
  getAction(): BindingDelta.Action;
  setAction(value: BindingDelta.Action): BindingDelta;

  getRole(): string;
  setRole(value: string): BindingDelta;

  getMember(): string;
  setMember(value: string): BindingDelta;

  getCondition(): google_type_expr_pb.Expr | undefined;
  setCondition(value?: google_type_expr_pb.Expr): BindingDelta;
  hasCondition(): boolean;
  clearCondition(): BindingDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingDelta.AsObject;
  static toObject(includeInstance: boolean, msg: BindingDelta): BindingDelta.AsObject;
  static serializeBinaryToWriter(message: BindingDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingDelta;
  static deserializeBinaryFromReader(message: BindingDelta, reader: jspb.BinaryReader): BindingDelta;
}

export namespace BindingDelta {
  export type AsObject = {
    action: BindingDelta.Action,
    role: string,
    member: string,
    condition?: google_type_expr_pb.Expr.AsObject,
  }

  export enum Action { 
    ACTION_UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
  }
}

export class AuditConfigDelta extends jspb.Message {
  getAction(): AuditConfigDelta.Action;
  setAction(value: AuditConfigDelta.Action): AuditConfigDelta;

  getService(): string;
  setService(value: string): AuditConfigDelta;

  getExemptedMember(): string;
  setExemptedMember(value: string): AuditConfigDelta;

  getLogType(): string;
  setLogType(value: string): AuditConfigDelta;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditConfigDelta.AsObject;
  static toObject(includeInstance: boolean, msg: AuditConfigDelta): AuditConfigDelta.AsObject;
  static serializeBinaryToWriter(message: AuditConfigDelta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditConfigDelta;
  static deserializeBinaryFromReader(message: AuditConfigDelta, reader: jspb.BinaryReader): AuditConfigDelta;
}

export namespace AuditConfigDelta {
  export type AsObject = {
    action: AuditConfigDelta.Action,
    service: string,
    exemptedMember: string,
    logType: string,
  }

  export enum Action { 
    ACTION_UNSPECIFIED = 0,
    ADD = 1,
    REMOVE = 2,
  }
}

