import * as jspb from 'google-protobuf'



export class SourceInfo extends jspb.Message {
  getLocation(): string;
  setLocation(value: string): SourceInfo;

  getLineOffsetsList(): Array<number>;
  setLineOffsetsList(value: Array<number>): SourceInfo;
  clearLineOffsetsList(): SourceInfo;
  addLineOffsets(value: number, index?: number): SourceInfo;

  getPositionsMap(): jspb.Map<number, number>;
  clearPositionsMap(): SourceInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SourceInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SourceInfo): SourceInfo.AsObject;
  static serializeBinaryToWriter(message: SourceInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SourceInfo;
  static deserializeBinaryFromReader(message: SourceInfo, reader: jspb.BinaryReader): SourceInfo;
}

export namespace SourceInfo {
  export type AsObject = {
    location: string,
    lineOffsetsList: Array<number>,
    positionsMap: Array<[number, number]>,
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

