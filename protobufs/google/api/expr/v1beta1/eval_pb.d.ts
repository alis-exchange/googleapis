import * as jspb from 'google-protobuf'

import * as google_api_expr_v1beta1_value_pb from '../../../../google/api/expr/v1beta1/value_pb';
import * as google_rpc_status_pb from '../../../../google/rpc/status_pb';


export class EvalState extends jspb.Message {
  getValuesList(): Array<ExprValue>;
  setValuesList(value: Array<ExprValue>): EvalState;
  clearValuesList(): EvalState;
  addValues(value?: ExprValue, index?: number): ExprValue;

  getResultsList(): Array<EvalState.Result>;
  setResultsList(value: Array<EvalState.Result>): EvalState;
  clearResultsList(): EvalState;
  addResults(value?: EvalState.Result, index?: number): EvalState.Result;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): EvalState.AsObject;
  static toObject(includeInstance: boolean, msg: EvalState): EvalState.AsObject;
  static serializeBinaryToWriter(message: EvalState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): EvalState;
  static deserializeBinaryFromReader(message: EvalState, reader: jspb.BinaryReader): EvalState;
}

export namespace EvalState {
  export type AsObject = {
    valuesList: Array<ExprValue.AsObject>,
    resultsList: Array<EvalState.Result.AsObject>,
  }

  export class Result extends jspb.Message {
    getExpr(): IdRef | undefined;
    setExpr(value?: IdRef): Result;
    hasExpr(): boolean;
    clearExpr(): Result;

    getValue(): number;
    setValue(value: number): Result;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Result.AsObject;
    static toObject(includeInstance: boolean, msg: Result): Result.AsObject;
    static serializeBinaryToWriter(message: Result, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Result;
    static deserializeBinaryFromReader(message: Result, reader: jspb.BinaryReader): Result;
  }

  export namespace Result {
    export type AsObject = {
      expr?: IdRef.AsObject,
      value: number,
    }
  }

}

export class ExprValue extends jspb.Message {
  getValue(): google_api_expr_v1beta1_value_pb.Value | undefined;
  setValue(value?: google_api_expr_v1beta1_value_pb.Value): ExprValue;
  hasValue(): boolean;
  clearValue(): ExprValue;

  getError(): ErrorSet | undefined;
  setError(value?: ErrorSet): ExprValue;
  hasError(): boolean;
  clearError(): ExprValue;

  getUnknown(): UnknownSet | undefined;
  setUnknown(value?: UnknownSet): ExprValue;
  hasUnknown(): boolean;
  clearUnknown(): ExprValue;

  getKindCase(): ExprValue.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExprValue.AsObject;
  static toObject(includeInstance: boolean, msg: ExprValue): ExprValue.AsObject;
  static serializeBinaryToWriter(message: ExprValue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExprValue;
  static deserializeBinaryFromReader(message: ExprValue, reader: jspb.BinaryReader): ExprValue;
}

export namespace ExprValue {
  export type AsObject = {
    value?: google_api_expr_v1beta1_value_pb.Value.AsObject,
    error?: ErrorSet.AsObject,
    unknown?: UnknownSet.AsObject,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    VALUE = 1,
    ERROR = 2,
    UNKNOWN = 3,
  }
}

export class ErrorSet extends jspb.Message {
  getErrorsList(): Array<google_rpc_status_pb.Status>;
  setErrorsList(value: Array<google_rpc_status_pb.Status>): ErrorSet;
  clearErrorsList(): ErrorSet;
  addErrors(value?: google_rpc_status_pb.Status, index?: number): google_rpc_status_pb.Status;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorSet.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorSet): ErrorSet.AsObject;
  static serializeBinaryToWriter(message: ErrorSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorSet;
  static deserializeBinaryFromReader(message: ErrorSet, reader: jspb.BinaryReader): ErrorSet;
}

export namespace ErrorSet {
  export type AsObject = {
    errorsList: Array<google_rpc_status_pb.Status.AsObject>,
  }
}

export class UnknownSet extends jspb.Message {
  getExprsList(): Array<IdRef>;
  setExprsList(value: Array<IdRef>): UnknownSet;
  clearExprsList(): UnknownSet;
  addExprs(value?: IdRef, index?: number): IdRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UnknownSet.AsObject;
  static toObject(includeInstance: boolean, msg: UnknownSet): UnknownSet.AsObject;
  static serializeBinaryToWriter(message: UnknownSet, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UnknownSet;
  static deserializeBinaryFromReader(message: UnknownSet, reader: jspb.BinaryReader): UnknownSet;
}

export namespace UnknownSet {
  export type AsObject = {
    exprsList: Array<IdRef.AsObject>,
  }
}

export class IdRef extends jspb.Message {
  getId(): number;
  setId(value: number): IdRef;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdRef.AsObject;
  static toObject(includeInstance: boolean, msg: IdRef): IdRef.AsObject;
  static serializeBinaryToWriter(message: IdRef, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdRef;
  static deserializeBinaryFromReader(message: IdRef, reader: jspb.BinaryReader): IdRef;
}

export namespace IdRef {
  export type AsObject = {
    id: number,
  }
}

