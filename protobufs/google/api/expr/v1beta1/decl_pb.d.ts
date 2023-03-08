import * as jspb from 'google-protobuf'

import * as google_api_expr_v1beta1_expr_pb from '../../../../google/api/expr/v1beta1/expr_pb';


export class Decl extends jspb.Message {
  getId(): number;
  setId(value: number): Decl;

  getName(): string;
  setName(value: string): Decl;

  getDoc(): string;
  setDoc(value: string): Decl;

  getIdent(): IdentDecl | undefined;
  setIdent(value?: IdentDecl): Decl;
  hasIdent(): boolean;
  clearIdent(): Decl;

  getFunction(): FunctionDecl | undefined;
  setFunction(value?: FunctionDecl): Decl;
  hasFunction(): boolean;
  clearFunction(): Decl;

  getKindCase(): Decl.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decl.AsObject;
  static toObject(includeInstance: boolean, msg: Decl): Decl.AsObject;
  static serializeBinaryToWriter(message: Decl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decl;
  static deserializeBinaryFromReader(message: Decl, reader: jspb.BinaryReader): Decl;
}

export namespace Decl {
  export type AsObject = {
    id: number,
    name: string,
    doc: string,
    ident?: IdentDecl.AsObject,
    pb_function?: FunctionDecl.AsObject,
  }

  export enum KindCase { 
    KIND_NOT_SET = 0,
    IDENT = 4,
    FUNCTION = 5,
  }
}

export class DeclType extends jspb.Message {
  getId(): number;
  setId(value: number): DeclType;

  getType(): string;
  setType(value: string): DeclType;

  getTypeParamsList(): Array<DeclType>;
  setTypeParamsList(value: Array<DeclType>): DeclType;
  clearTypeParamsList(): DeclType;
  addTypeParams(value?: DeclType, index?: number): DeclType;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeclType.AsObject;
  static toObject(includeInstance: boolean, msg: DeclType): DeclType.AsObject;
  static serializeBinaryToWriter(message: DeclType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeclType;
  static deserializeBinaryFromReader(message: DeclType, reader: jspb.BinaryReader): DeclType;
}

export namespace DeclType {
  export type AsObject = {
    id: number,
    type: string,
    typeParamsList: Array<DeclType.AsObject>,
  }
}

export class IdentDecl extends jspb.Message {
  getType(): DeclType | undefined;
  setType(value?: DeclType): IdentDecl;
  hasType(): boolean;
  clearType(): IdentDecl;

  getValue(): google_api_expr_v1beta1_expr_pb.Expr | undefined;
  setValue(value?: google_api_expr_v1beta1_expr_pb.Expr): IdentDecl;
  hasValue(): boolean;
  clearValue(): IdentDecl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentDecl.AsObject;
  static toObject(includeInstance: boolean, msg: IdentDecl): IdentDecl.AsObject;
  static serializeBinaryToWriter(message: IdentDecl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentDecl;
  static deserializeBinaryFromReader(message: IdentDecl, reader: jspb.BinaryReader): IdentDecl;
}

export namespace IdentDecl {
  export type AsObject = {
    type?: DeclType.AsObject,
    value?: google_api_expr_v1beta1_expr_pb.Expr.AsObject,
  }
}

export class FunctionDecl extends jspb.Message {
  getArgsList(): Array<IdentDecl>;
  setArgsList(value: Array<IdentDecl>): FunctionDecl;
  clearArgsList(): FunctionDecl;
  addArgs(value?: IdentDecl, index?: number): IdentDecl;

  getReturnType(): DeclType | undefined;
  setReturnType(value?: DeclType): FunctionDecl;
  hasReturnType(): boolean;
  clearReturnType(): FunctionDecl;

  getReceiverFunction(): boolean;
  setReceiverFunction(value: boolean): FunctionDecl;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FunctionDecl.AsObject;
  static toObject(includeInstance: boolean, msg: FunctionDecl): FunctionDecl.AsObject;
  static serializeBinaryToWriter(message: FunctionDecl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FunctionDecl;
  static deserializeBinaryFromReader(message: FunctionDecl, reader: jspb.BinaryReader): FunctionDecl;
}

export namespace FunctionDecl {
  export type AsObject = {
    argsList: Array<IdentDecl.AsObject>,
    returnType?: DeclType.AsObject,
    receiverFunction: boolean,
  }
}

