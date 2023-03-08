import * as jspb from 'google-protobuf'



export class AuditData extends jspb.Message {
  getPermissionDelta(): AuditData.PermissionDelta | undefined;
  setPermissionDelta(value?: AuditData.PermissionDelta): AuditData;
  hasPermissionDelta(): boolean;
  clearPermissionDelta(): AuditData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuditData.AsObject;
  static toObject(includeInstance: boolean, msg: AuditData): AuditData.AsObject;
  static serializeBinaryToWriter(message: AuditData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuditData;
  static deserializeBinaryFromReader(message: AuditData, reader: jspb.BinaryReader): AuditData;
}

export namespace AuditData {
  export type AsObject = {
    permissionDelta?: AuditData.PermissionDelta.AsObject,
  }

  export class PermissionDelta extends jspb.Message {
    getAddedPermissionsList(): Array<string>;
    setAddedPermissionsList(value: Array<string>): PermissionDelta;
    clearAddedPermissionsList(): PermissionDelta;
    addAddedPermissions(value: string, index?: number): PermissionDelta;

    getRemovedPermissionsList(): Array<string>;
    setRemovedPermissionsList(value: Array<string>): PermissionDelta;
    clearRemovedPermissionsList(): PermissionDelta;
    addRemovedPermissions(value: string, index?: number): PermissionDelta;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PermissionDelta.AsObject;
    static toObject(includeInstance: boolean, msg: PermissionDelta): PermissionDelta.AsObject;
    static serializeBinaryToWriter(message: PermissionDelta, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PermissionDelta;
    static deserializeBinaryFromReader(message: PermissionDelta, reader: jspb.BinaryReader): PermissionDelta;
  }

  export namespace PermissionDelta {
    export type AsObject = {
      addedPermissionsList: Array<string>,
      removedPermissionsList: Array<string>,
    }
  }

}

