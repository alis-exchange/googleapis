import * as jspb from 'google-protobuf'

import * as google_api_expr_v1alpha1_syntax_pb from '../../../../google/api/expr/v1alpha1/syntax_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class CheckedExpr extends jspb.Message {
  getReferenceMapMap(): jspb.Map<number, Reference>;
  clearReferenceMapMap(): CheckedExpr;

  getTypeMapMap(): jspb.Map<number, Type>;
  clearTypeMapMap(): CheckedExpr;

  getSourceInfo(): google_api_expr_v1alpha1_syntax_pb.SourceInfo | undefined;
  setSourceInfo(value?: google_api_expr_v1alpha1_syntax_pb.SourceInfo): CheckedExpr;
  hasSourceInfo(): boolean;
  clearSourceInfo(): CheckedExpr;

  getExprVersion(): string;
  setExprVersion(value: string): CheckedExpr;

  getExpr(): google_api_expr_v1alpha1_syntax_pb.Expr | undefined;
  setExpr(value?: google_api_expr_v1alpha1_syntax_pb.Expr): CheckedExpr;
  hasExpr(): boolean;
  clearExpr(): CheckedExpr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CheckedExpr.AsObject;
  static toObject(includeInstance: boolean, msg: CheckedExpr): CheckedExpr.AsObject;
  static serializeBinaryToWriter(message: CheckedExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CheckedExpr;
  static deserializeBinaryFromReader(message: CheckedExpr, reader: jspb.BinaryReader): CheckedExpr;
}

export namespace CheckedExpr {
  export type AsObject = {
    referenceMapMap: Array<[number, Reference.AsObject]>,
    typeMapMap: Array<[number, Type.AsObject]>,
    sourceInfo?: google_api_expr_v1alpha1_syntax_pb.SourceInfo.AsObject,
    exprVersion: string,
    expr?: google_api_expr_v1alpha1_syntax_pb.Expr.AsObject,
  }
}

export class Type extends jspb.Message {
  getDyn(): google_protobuf_empty_pb.Empty | undefined;
  setDyn(value?: google_protobuf_empty_pb.Empty): Type;
  hasDyn(): boolean;
  clearDyn(): Type;

  getNull(): google_protobuf_struct_pb.NullValue;
  setNull(value: google_protobuf_struct_pb.NullValue): Type;

  getPrimitive(): Type.PrimitiveType;
  setPrimitive(value: Type.PrimitiveType): Type;

  getWrapper(): Type.PrimitiveType;
  setWrapper(value: Type.PrimitiveType): Type;

  getWellKnown(): Type.WellKnownType;
  setWellKnown(value: Type.WellKnownType): Type;

  getListType(): Type.ListType | undefined;
  setListType(value?: Type.ListType): Type;
  hasListType(): boolean;
  clearListType(): Type;

  getMapType(): Type.MapType | undefined;
  setMapType(value?: Type.MapType): Type;
  hasMapType(): boolean;
  clearMapType(): Type;

  getFunction(): Type.FunctionType | undefined;
  setFunction(value?: Type.FunctionType): Type;
  hasFunction(): boolean;
  clearFunction(): Type;

  getMessageType(): string;
  setMessageType(value: string): Type;

  getTypeParam(): string;
  setTypeParam(value: string): Type;

  getType(): Type | undefined;
  setType(value?: Type): Type;
  hasType(): boolean;
  clearType(): Type;

  getError(): google_protobuf_empty_pb.Empty | undefined;
  setError(value?: google_protobuf_empty_pb.Empty): Type;
  hasError(): boolean;
  clearError(): Type;

  getAbstractType(): Type.AbstractType | undefined;
  setAbstractType(value?: Type.AbstractType): Type;
  hasAbstractType(): boolean;
  clearAbstractType(): Type;

  getTypeKindCase(): Type.TypeKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Type.AsObject;
  static toObject(includeInstance: boolean, msg: Type): Type.AsObject;
  static serializeBinaryToWriter(message: Type, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Type;
  static deserializeBinaryFromReader(message: Type, reader: jspb.BinaryReader): Type;
}

export namespace Type {
  export type AsObject = {
    dyn?: google_protobuf_empty_pb.Empty.AsObject,
    pb_null: google_protobuf_struct_pb.NullValue,
    primitive: Type.PrimitiveType,
    wrapper: Type.PrimitiveType,
    wellKnown: Type.WellKnownType,
    listType?: Type.ListType.AsObject,
    mapType?: Type.MapType.AsObject,
    pb_function?: Type.FunctionType.AsObject,
    messageType: string,
    typeParam: string,
    type?: Type.AsObject,
    error?: google_protobuf_empty_pb.Empty.AsObject,
    abstractType?: Type.AbstractType.AsObject,
  }

  export class ListType extends jspb.Message {
    getElemType(): Type | undefined;
    setElemType(value?: Type): ListType;
    hasElemType(): boolean;
    clearElemType(): ListType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListType.AsObject;
    static toObject(includeInstance: boolean, msg: ListType): ListType.AsObject;
    static serializeBinaryToWriter(message: ListType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListType;
    static deserializeBinaryFromReader(message: ListType, reader: jspb.BinaryReader): ListType;
  }

  export namespace ListType {
    export type AsObject = {
      elemType?: Type.AsObject,
    }
  }


  export class MapType extends jspb.Message {
    getKeyType(): Type | undefined;
    setKeyType(value?: Type): MapType;
    hasKeyType(): boolean;
    clearKeyType(): MapType;

    getValueType(): Type | undefined;
    setValueType(value?: Type): MapType;
    hasValueType(): boolean;
    clearValueType(): MapType;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MapType.AsObject;
    static toObject(includeInstance: boolean, msg: MapType): MapType.AsObject;
    static serializeBinaryToWriter(message: MapType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MapType;
    static deserializeBinaryFromReader(message: MapType, reader: jspb.BinaryReader): MapType;
  }

  export namespace MapType {
    export type AsObject = {
      keyType?: Type.AsObject,
      valueType?: Type.AsObject,
    }
  }


  export class FunctionType extends jspb.Message {
    getResultType(): Type | undefined;
    setResultType(value?: Type): FunctionType;
    hasResultType(): boolean;
    clearResultType(): FunctionType;

    getArgTypesList(): Array<Type>;
    setArgTypesList(value: Array<Type>): FunctionType;
    clearArgTypesList(): FunctionType;
    addArgTypes(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionType.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionType): FunctionType.AsObject;
    static serializeBinaryToWriter(message: FunctionType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionType;
    static deserializeBinaryFromReader(message: FunctionType, reader: jspb.BinaryReader): FunctionType;
  }

  export namespace FunctionType {
    export type AsObject = {
      resultType?: Type.AsObject,
      argTypesList: Array<Type.AsObject>,
    }
  }


  export class AbstractType extends jspb.Message {
    getName(): string;
    setName(value: string): AbstractType;

    getParameterTypesList(): Array<Type>;
    setParameterTypesList(value: Array<Type>): AbstractType;
    clearParameterTypesList(): AbstractType;
    addParameterTypes(value?: Type, index?: number): Type;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AbstractType.AsObject;
    static toObject(includeInstance: boolean, msg: AbstractType): AbstractType.AsObject;
    static serializeBinaryToWriter(message: AbstractType, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AbstractType;
    static deserializeBinaryFromReader(message: AbstractType, reader: jspb.BinaryReader): AbstractType;
  }

  export namespace AbstractType {
    export type AsObject = {
      name: string,
      parameterTypesList: Array<Type.AsObject>,
    }
  }


  export enum PrimitiveType { 
    PRIMITIVE_TYPE_UNSPECIFIED = 0,
    BOOL = 1,
    INT64 = 2,
    UINT64 = 3,
    DOUBLE = 4,
    STRING = 5,
    BYTES = 6,
  }

  export enum WellKnownType { 
    WELL_KNOWN_TYPE_UNSPECIFIED = 0,
    ANY = 1,
    TIMESTAMP = 2,
    DURATION = 3,
  }

  export enum TypeKindCase { 
    TYPE_KIND_NOT_SET = 0,
    DYN = 1,
    NULL = 2,
    PRIMITIVE = 3,
    WRAPPER = 4,
    WELL_KNOWN = 5,
    LIST_TYPE = 6,
    MAP_TYPE = 7,
    FUNCTION = 8,
    MESSAGE_TYPE = 9,
    TYPE_PARAM = 10,
    TYPE = 11,
    ERROR = 12,
    ABSTRACT_TYPE = 14,
  }
}

export class Decl extends jspb.Message {
  getName(): string;
  setName(value: string): Decl;

  getIdent(): Decl.IdentDecl | undefined;
  setIdent(value?: Decl.IdentDecl): Decl;
  hasIdent(): boolean;
  clearIdent(): Decl;

  getFunction(): Decl.FunctionDecl | undefined;
  setFunction(value?: Decl.FunctionDecl): Decl;
  hasFunction(): boolean;
  clearFunction(): Decl;

  getDeclKindCase(): Decl.DeclKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Decl.AsObject;
  static toObject(includeInstance: boolean, msg: Decl): Decl.AsObject;
  static serializeBinaryToWriter(message: Decl, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Decl;
  static deserializeBinaryFromReader(message: Decl, reader: jspb.BinaryReader): Decl;
}

export namespace Decl {
  export type AsObject = {
    name: string,
    ident?: Decl.IdentDecl.AsObject,
    pb_function?: Decl.FunctionDecl.AsObject,
  }

  export class IdentDecl extends jspb.Message {
    getType(): Type | undefined;
    setType(value?: Type): IdentDecl;
    hasType(): boolean;
    clearType(): IdentDecl;

    getValue(): google_api_expr_v1alpha1_syntax_pb.Constant | undefined;
    setValue(value?: google_api_expr_v1alpha1_syntax_pb.Constant): IdentDecl;
    hasValue(): boolean;
    clearValue(): IdentDecl;

    getDoc(): string;
    setDoc(value: string): IdentDecl;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): IdentDecl.AsObject;
    static toObject(includeInstance: boolean, msg: IdentDecl): IdentDecl.AsObject;
    static serializeBinaryToWriter(message: IdentDecl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): IdentDecl;
    static deserializeBinaryFromReader(message: IdentDecl, reader: jspb.BinaryReader): IdentDecl;
  }

  export namespace IdentDecl {
    export type AsObject = {
      type?: Type.AsObject,
      value?: google_api_expr_v1alpha1_syntax_pb.Constant.AsObject,
      doc: string,
    }
  }


  export class FunctionDecl extends jspb.Message {
    getOverloadsList(): Array<Decl.FunctionDecl.Overload>;
    setOverloadsList(value: Array<Decl.FunctionDecl.Overload>): FunctionDecl;
    clearOverloadsList(): FunctionDecl;
    addOverloads(value?: Decl.FunctionDecl.Overload, index?: number): Decl.FunctionDecl.Overload;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FunctionDecl.AsObject;
    static toObject(includeInstance: boolean, msg: FunctionDecl): FunctionDecl.AsObject;
    static serializeBinaryToWriter(message: FunctionDecl, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FunctionDecl;
    static deserializeBinaryFromReader(message: FunctionDecl, reader: jspb.BinaryReader): FunctionDecl;
  }

  export namespace FunctionDecl {
    export type AsObject = {
      overloadsList: Array<Decl.FunctionDecl.Overload.AsObject>,
    }

    export class Overload extends jspb.Message {
      getOverloadId(): string;
      setOverloadId(value: string): Overload;

      getParamsList(): Array<Type>;
      setParamsList(value: Array<Type>): Overload;
      clearParamsList(): Overload;
      addParams(value?: Type, index?: number): Type;

      getTypeParamsList(): Array<string>;
      setTypeParamsList(value: Array<string>): Overload;
      clearTypeParamsList(): Overload;
      addTypeParams(value: string, index?: number): Overload;

      getResultType(): Type | undefined;
      setResultType(value?: Type): Overload;
      hasResultType(): boolean;
      clearResultType(): Overload;

      getIsInstanceFunction(): boolean;
      setIsInstanceFunction(value: boolean): Overload;

      getDoc(): string;
      setDoc(value: string): Overload;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Overload.AsObject;
      static toObject(includeInstance: boolean, msg: Overload): Overload.AsObject;
      static serializeBinaryToWriter(message: Overload, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Overload;
      static deserializeBinaryFromReader(message: Overload, reader: jspb.BinaryReader): Overload;
    }

    export namespace Overload {
      export type AsObject = {
        overloadId: string,
        paramsList: Array<Type.AsObject>,
        typeParamsList: Array<string>,
        resultType?: Type.AsObject,
        isInstanceFunction: boolean,
        doc: string,
      }
    }

  }


  export enum DeclKindCase { 
    DECL_KIND_NOT_SET = 0,
    IDENT = 2,
    FUNCTION = 3,
  }
}

export class Reference extends jspb.Message {
  getName(): string;
  setName(value: string): Reference;

  getOverloadIdList(): Array<string>;
  setOverloadIdList(value: Array<string>): Reference;
  clearOverloadIdList(): Reference;
  addOverloadId(value: string, index?: number): Reference;

  getValue(): google_api_expr_v1alpha1_syntax_pb.Constant | undefined;
  setValue(value?: google_api_expr_v1alpha1_syntax_pb.Constant): Reference;
  hasValue(): boolean;
  clearValue(): Reference;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reference.AsObject;
  static toObject(includeInstance: boolean, msg: Reference): Reference.AsObject;
  static serializeBinaryToWriter(message: Reference, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reference;
  static deserializeBinaryFromReader(message: Reference, reader: jspb.BinaryReader): Reference;
}

export namespace Reference {
  export type AsObject = {
    name: string,
    overloadIdList: Array<string>,
    value?: google_api_expr_v1alpha1_syntax_pb.Constant.AsObject,
  }
}

