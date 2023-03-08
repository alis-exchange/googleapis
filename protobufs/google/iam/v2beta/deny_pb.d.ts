import * as jspb from 'google-protobuf'

import * as google_type_expr_pb from '../../../google/type/expr_pb';


export class DenyRule extends jspb.Message {
  getDeniedPrincipalsList(): Array<string>;
  setDeniedPrincipalsList(value: Array<string>): DenyRule;
  clearDeniedPrincipalsList(): DenyRule;
  addDeniedPrincipals(value: string, index?: number): DenyRule;

  getExceptionPrincipalsList(): Array<string>;
  setExceptionPrincipalsList(value: Array<string>): DenyRule;
  clearExceptionPrincipalsList(): DenyRule;
  addExceptionPrincipals(value: string, index?: number): DenyRule;

  getDeniedPermissionsList(): Array<string>;
  setDeniedPermissionsList(value: Array<string>): DenyRule;
  clearDeniedPermissionsList(): DenyRule;
  addDeniedPermissions(value: string, index?: number): DenyRule;

  getExceptionPermissionsList(): Array<string>;
  setExceptionPermissionsList(value: Array<string>): DenyRule;
  clearExceptionPermissionsList(): DenyRule;
  addExceptionPermissions(value: string, index?: number): DenyRule;

  getDenialCondition(): google_type_expr_pb.Expr | undefined;
  setDenialCondition(value?: google_type_expr_pb.Expr): DenyRule;
  hasDenialCondition(): boolean;
  clearDenialCondition(): DenyRule;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DenyRule.AsObject;
  static toObject(includeInstance: boolean, msg: DenyRule): DenyRule.AsObject;
  static serializeBinaryToWriter(message: DenyRule, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DenyRule;
  static deserializeBinaryFromReader(message: DenyRule, reader: jspb.BinaryReader): DenyRule;
}

export namespace DenyRule {
  export type AsObject = {
    deniedPrincipalsList: Array<string>,
    exceptionPrincipalsList: Array<string>,
    deniedPermissionsList: Array<string>,
    exceptionPermissionsList: Array<string>,
    denialCondition?: google_type_expr_pb.Expr.AsObject,
  }
}

