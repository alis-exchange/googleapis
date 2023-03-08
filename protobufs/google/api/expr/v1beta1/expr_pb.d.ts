import * as jspb from 'google-protobuf'

import * as google_api_expr_v1beta1_source_pb from '../../../../google/api/expr/v1beta1/source_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';


export class ParsedExpr extends jspb.Message {
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): ParsedExpr;
  hasExpr(): boolean;
  clearExpr(): ParsedExpr;

  getSourceInfo(): google_api_expr_v1beta1_source_pb.SourceInfo | undefined;
  setSourceInfo(value?: google_api_expr_v1beta1_source_pb.SourceInfo): ParsedExpr;
  hasSourceInfo(): boolean;
  clearSourceInfo(): ParsedExpr;

  getSyntaxVersion(): string;
  setSyntaxVersion(value: string): ParsedExpr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ParsedExpr.AsObject;
  static toObject(includeInstance: boolean, msg: ParsedExpr): ParsedExpr.AsObject;
  static serializeBinaryToWriter(message: ParsedExpr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ParsedExpr;
  static deserializeBinaryFromReader(message: ParsedExpr, reader: jspb.BinaryReader): ParsedExpr;
}

export namespace ParsedExpr {
  export type AsObject = {
    expr?: Expr.AsObject,
    sourceInfo?: google_api_expr_v1beta1_source_pb.SourceInfo.AsObject,
    syntaxVersion: string,
  }
}

export class Expr extends jspb.Message {
  getId(): number;
  setId(value: number): Expr;

  getLiteralExpr(): Literal | undefined;
  setLiteralExpr(value?: Literal): Expr;
  hasLiteralExpr(): boolean;
  clearLiteralExpr(): Expr;

  getIdentExpr(): Expr.Ident | undefined;
  setIdentExpr(value?: Expr.Ident): Expr;
  hasIdentExpr(): boolean;
  clearIdentExpr(): Expr;

  getSelectExpr(): Expr.Select | undefined;
  setSelectExpr(value?: Expr.Select): Expr;
  hasSelectExpr(): boolean;
  clearSelectExpr(): Expr;

  getCallExpr(): Expr.Call | undefined;
  setCallExpr(value?: Expr.Call): Expr;
  hasCallExpr(): boolean;
  clearCallExpr(): Expr;

  getListExpr(): Expr.CreateList | undefined;
  setListExpr(value?: Expr.CreateList): Expr;
  hasListExpr(): boolean;
  clearListExpr(): Expr;

  getStructExpr(): Expr.CreateStruct | undefined;
  setStructExpr(value?: Expr.CreateStruct): Expr;
  hasStructExpr(): boolean;
  clearStructExpr(): Expr;

  getComprehensionExpr(): Expr.Comprehension | undefined;
  setComprehensionExpr(value?: Expr.Comprehension): Expr;
  hasComprehensionExpr(): boolean;
  clearComprehensionExpr(): Expr;

  getExprKindCase(): Expr.ExprKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    id: number,
    literalExpr?: Literal.AsObject,
    identExpr?: Expr.Ident.AsObject,
    selectExpr?: Expr.Select.AsObject,
    callExpr?: Expr.Call.AsObject,
    listExpr?: Expr.CreateList.AsObject,
    structExpr?: Expr.CreateStruct.AsObject,
    comprehensionExpr?: Expr.Comprehension.AsObject,
  }

  export class Ident extends jspb.Message {
    getName(): string;
    setName(value: string): Ident;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ident.AsObject;
    static toObject(includeInstance: boolean, msg: Ident): Ident.AsObject;
    static serializeBinaryToWriter(message: Ident, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ident;
    static deserializeBinaryFromReader(message: Ident, reader: jspb.BinaryReader): Ident;
  }

  export namespace Ident {
    export type AsObject = {
      name: string,
    }
  }


  export class Select extends jspb.Message {
    getOperand(): Expr | undefined;
    setOperand(value?: Expr): Select;
    hasOperand(): boolean;
    clearOperand(): Select;

    getField(): string;
    setField(value: string): Select;

    getTestOnly(): boolean;
    setTestOnly(value: boolean): Select;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Select.AsObject;
    static toObject(includeInstance: boolean, msg: Select): Select.AsObject;
    static serializeBinaryToWriter(message: Select, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Select;
    static deserializeBinaryFromReader(message: Select, reader: jspb.BinaryReader): Select;
  }

  export namespace Select {
    export type AsObject = {
      operand?: Expr.AsObject,
      field: string,
      testOnly: boolean,
    }
  }


  export class Call extends jspb.Message {
    getTarget(): Expr | undefined;
    setTarget(value?: Expr): Call;
    hasTarget(): boolean;
    clearTarget(): Call;

    getFunction(): string;
    setFunction(value: string): Call;

    getArgsList(): Array<Expr>;
    setArgsList(value: Array<Expr>): Call;
    clearArgsList(): Call;
    addArgs(value?: Expr, index?: number): Expr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Call.AsObject;
    static toObject(includeInstance: boolean, msg: Call): Call.AsObject;
    static serializeBinaryToWriter(message: Call, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Call;
    static deserializeBinaryFromReader(message: Call, reader: jspb.BinaryReader): Call;
  }

  export namespace Call {
    export type AsObject = {
      target?: Expr.AsObject,
      pb_function: string,
      argsList: Array<Expr.AsObject>,
    }
  }


  export class CreateList extends jspb.Message {
    getElementsList(): Array<Expr>;
    setElementsList(value: Array<Expr>): CreateList;
    clearElementsList(): CreateList;
    addElements(value?: Expr, index?: number): Expr;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateList.AsObject;
    static toObject(includeInstance: boolean, msg: CreateList): CreateList.AsObject;
    static serializeBinaryToWriter(message: CreateList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateList;
    static deserializeBinaryFromReader(message: CreateList, reader: jspb.BinaryReader): CreateList;
  }

  export namespace CreateList {
    export type AsObject = {
      elementsList: Array<Expr.AsObject>,
    }
  }


  export class CreateStruct extends jspb.Message {
    getType(): string;
    setType(value: string): CreateStruct;

    getEntriesList(): Array<Expr.CreateStruct.Entry>;
    setEntriesList(value: Array<Expr.CreateStruct.Entry>): CreateStruct;
    clearEntriesList(): CreateStruct;
    addEntries(value?: Expr.CreateStruct.Entry, index?: number): Expr.CreateStruct.Entry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateStruct.AsObject;
    static toObject(includeInstance: boolean, msg: CreateStruct): CreateStruct.AsObject;
    static serializeBinaryToWriter(message: CreateStruct, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateStruct;
    static deserializeBinaryFromReader(message: CreateStruct, reader: jspb.BinaryReader): CreateStruct;
  }

  export namespace CreateStruct {
    export type AsObject = {
      type: string,
      entriesList: Array<Expr.CreateStruct.Entry.AsObject>,
    }

    export class Entry extends jspb.Message {
      getId(): number;
      setId(value: number): Entry;

      getFieldKey(): string;
      setFieldKey(value: string): Entry;

      getMapKey(): Expr | undefined;
      setMapKey(value?: Expr): Entry;
      hasMapKey(): boolean;
      clearMapKey(): Entry;

      getValue(): Expr | undefined;
      setValue(value?: Expr): Entry;
      hasValue(): boolean;
      clearValue(): Entry;

      getKeyKindCase(): Entry.KeyKindCase;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): Entry.AsObject;
      static toObject(includeInstance: boolean, msg: Entry): Entry.AsObject;
      static serializeBinaryToWriter(message: Entry, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): Entry;
      static deserializeBinaryFromReader(message: Entry, reader: jspb.BinaryReader): Entry;
    }

    export namespace Entry {
      export type AsObject = {
        id: number,
        fieldKey: string,
        mapKey?: Expr.AsObject,
        value?: Expr.AsObject,
      }

      export enum KeyKindCase { 
        KEY_KIND_NOT_SET = 0,
        FIELD_KEY = 2,
        MAP_KEY = 3,
      }
    }

  }


  export class Comprehension extends jspb.Message {
    getIterVar(): string;
    setIterVar(value: string): Comprehension;

    getIterRange(): Expr | undefined;
    setIterRange(value?: Expr): Comprehension;
    hasIterRange(): boolean;
    clearIterRange(): Comprehension;

    getAccuVar(): string;
    setAccuVar(value: string): Comprehension;

    getAccuInit(): Expr | undefined;
    setAccuInit(value?: Expr): Comprehension;
    hasAccuInit(): boolean;
    clearAccuInit(): Comprehension;

    getLoopCondition(): Expr | undefined;
    setLoopCondition(value?: Expr): Comprehension;
    hasLoopCondition(): boolean;
    clearLoopCondition(): Comprehension;

    getLoopStep(): Expr | undefined;
    setLoopStep(value?: Expr): Comprehension;
    hasLoopStep(): boolean;
    clearLoopStep(): Comprehension;

    getResult(): Expr | undefined;
    setResult(value?: Expr): Comprehension;
    hasResult(): boolean;
    clearResult(): Comprehension;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Comprehension.AsObject;
    static toObject(includeInstance: boolean, msg: Comprehension): Comprehension.AsObject;
    static serializeBinaryToWriter(message: Comprehension, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Comprehension;
    static deserializeBinaryFromReader(message: Comprehension, reader: jspb.BinaryReader): Comprehension;
  }

  export namespace Comprehension {
    export type AsObject = {
      iterVar: string,
      iterRange?: Expr.AsObject,
      accuVar: string,
      accuInit?: Expr.AsObject,
      loopCondition?: Expr.AsObject,
      loopStep?: Expr.AsObject,
      result?: Expr.AsObject,
    }
  }


  export enum ExprKindCase { 
    EXPR_KIND_NOT_SET = 0,
    LITERAL_EXPR = 3,
    IDENT_EXPR = 4,
    SELECT_EXPR = 5,
    CALL_EXPR = 6,
    LIST_EXPR = 7,
    STRUCT_EXPR = 8,
    COMPREHENSION_EXPR = 9,
  }
}

export class Literal extends jspb.Message {
  getNullValue(): google_protobuf_struct_pb.NullValue;
  setNullValue(value: google_protobuf_struct_pb.NullValue): Literal;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): Literal;

  getInt64Value(): number;
  setInt64Value(value: number): Literal;

  getUint64Value(): number;
  setUint64Value(value: number): Literal;

  getDoubleValue(): number;
  setDoubleValue(value: number): Literal;

  getStringValue(): string;
  setStringValue(value: string): Literal;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): Literal;

  getConstantKindCase(): Literal.ConstantKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Literal.AsObject;
  static toObject(includeInstance: boolean, msg: Literal): Literal.AsObject;
  static serializeBinaryToWriter(message: Literal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Literal;
  static deserializeBinaryFromReader(message: Literal, reader: jspb.BinaryReader): Literal;
}

export namespace Literal {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValue,
    boolValue: boolean,
    int64Value: number,
    uint64Value: number,
    doubleValue: number,
    stringValue: string,
    bytesValue: Uint8Array | string,
  }

  export enum ConstantKindCase { 
    CONSTANT_KIND_NOT_SET = 0,
    NULL_VALUE = 1,
    BOOL_VALUE = 2,
    INT64_VALUE = 3,
    UINT64_VALUE = 4,
    DOUBLE_VALUE = 5,
    STRING_VALUE = 6,
    BYTES_VALUE = 7,
  }
}

