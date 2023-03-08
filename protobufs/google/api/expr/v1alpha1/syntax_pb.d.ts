import * as jspb from 'google-protobuf'

import * as google_protobuf_duration_pb from 'google-protobuf/google/protobuf/duration_pb';
import * as google_protobuf_struct_pb from 'google-protobuf/google/protobuf/struct_pb';
import * as google_protobuf_timestamp_pb from 'google-protobuf/google/protobuf/timestamp_pb';


export class ParsedExpr extends jspb.Message {
  getExpr(): Expr | undefined;
  setExpr(value?: Expr): ParsedExpr;
  hasExpr(): boolean;
  clearExpr(): ParsedExpr;

  getSourceInfo(): SourceInfo | undefined;
  setSourceInfo(value?: SourceInfo): ParsedExpr;
  hasSourceInfo(): boolean;
  clearSourceInfo(): ParsedExpr;

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
    sourceInfo?: SourceInfo.AsObject,
  }
}

export class Expr extends jspb.Message {
  getId(): number;
  setId(value: number): Expr;

  getConstExpr(): Constant | undefined;
  setConstExpr(value?: Constant): Expr;
  hasConstExpr(): boolean;
  clearConstExpr(): Expr;

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
    constExpr?: Constant.AsObject,
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

    getOptionalIndicesList(): Array<number>;
    setOptionalIndicesList(value: Array<number>): CreateList;
    clearOptionalIndicesList(): CreateList;
    addOptionalIndices(value: number, index?: number): CreateList;

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
      optionalIndicesList: Array<number>,
    }
  }


  export class CreateStruct extends jspb.Message {
    getMessageName(): string;
    setMessageName(value: string): CreateStruct;

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
      messageName: string,
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

      getOptionalEntry(): boolean;
      setOptionalEntry(value: boolean): Entry;

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
        optionalEntry: boolean,
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
    CONST_EXPR = 3,
    IDENT_EXPR = 4,
    SELECT_EXPR = 5,
    CALL_EXPR = 6,
    LIST_EXPR = 7,
    STRUCT_EXPR = 8,
    COMPREHENSION_EXPR = 9,
  }
}

export class Constant extends jspb.Message {
  getNullValue(): google_protobuf_struct_pb.NullValue;
  setNullValue(value: google_protobuf_struct_pb.NullValue): Constant;

  getBoolValue(): boolean;
  setBoolValue(value: boolean): Constant;

  getInt64Value(): number;
  setInt64Value(value: number): Constant;

  getUint64Value(): number;
  setUint64Value(value: number): Constant;

  getDoubleValue(): number;
  setDoubleValue(value: number): Constant;

  getStringValue(): string;
  setStringValue(value: string): Constant;

  getBytesValue(): Uint8Array | string;
  getBytesValue_asU8(): Uint8Array;
  getBytesValue_asB64(): string;
  setBytesValue(value: Uint8Array | string): Constant;

  getDurationValue(): google_protobuf_duration_pb.Duration | undefined;
  setDurationValue(value?: google_protobuf_duration_pb.Duration): Constant;
  hasDurationValue(): boolean;
  clearDurationValue(): Constant;

  getTimestampValue(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setTimestampValue(value?: google_protobuf_timestamp_pb.Timestamp): Constant;
  hasTimestampValue(): boolean;
  clearTimestampValue(): Constant;

  getConstantKindCase(): Constant.ConstantKindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Constant.AsObject;
  static toObject(includeInstance: boolean, msg: Constant): Constant.AsObject;
  static serializeBinaryToWriter(message: Constant, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Constant;
  static deserializeBinaryFromReader(message: Constant, reader: jspb.BinaryReader): Constant;
}

export namespace Constant {
  export type AsObject = {
    nullValue: google_protobuf_struct_pb.NullValue,
    boolValue: boolean,
    int64Value: number,
    uint64Value: number,
    doubleValue: number,
    stringValue: string,
    bytesValue: Uint8Array | string,
    durationValue?: google_protobuf_duration_pb.Duration.AsObject,
    timestampValue?: google_protobuf_timestamp_pb.Timestamp.AsObject,
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
    DURATION_VALUE = 8,
    TIMESTAMP_VALUE = 9,
  }
}

export class SourceInfo extends jspb.Message {
  getSyntaxVersion(): string;
  setSyntaxVersion(value: string): SourceInfo;

  getLocation(): string;
  setLocation(value: string): SourceInfo;

  getLineOffsetsList(): Array<number>;
  setLineOffsetsList(value: Array<number>): SourceInfo;
  clearLineOffsetsList(): SourceInfo;
  addLineOffsets(value: number, index?: number): SourceInfo;

  getPositionsMap(): jspb.Map<number, number>;
  clearPositionsMap(): SourceInfo;

  getMacroCallsMap(): jspb.Map<number, Expr>;
  clearMacroCallsMap(): SourceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SourceInfo): SourceInfo.AsObject;
  static serializeBinaryToWriter(message: SourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceInfo;
  static deserializeBinaryFromReader(message: SourceInfo, reader: jspb.BinaryReader): SourceInfo;
}

export namespace SourceInfo {
  export type AsObject = {
    syntaxVersion: string,
    location: string,
    lineOffsetsList: Array<number>,
    positionsMap: Array<[number, number]>,
    macroCallsMap: Array<[number, Expr.AsObject]>,
  }
}

export class SourcePosition extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): SourcePosition;

  getOffset(): number;
  setOffset(value: number): SourcePosition;

  getLine(): number;
  setLine(value: number): SourcePosition;

  getColumn(): number;
  setColumn(value: number): SourcePosition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourcePosition.AsObject;
  static toObject(includeInstance: boolean, msg: SourcePosition): SourcePosition.AsObject;
  static serializeBinaryToWriter(message: SourcePosition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourcePosition;
  static deserializeBinaryFromReader(message: SourcePosition, reader: jspb.BinaryReader): SourcePosition;
}

export namespace SourcePosition {
  export type AsObject = {
    location: string,
    offset: number,
    line: number,
    column: number,
  }
}

