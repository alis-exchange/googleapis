import * as jspb from 'google-protobuf'



export class Expr extends jspb.Message {
  getExpression(): string;
  setExpression(value: string): Expr;

  getTitle(): string;
  setTitle(value: string): Expr;

  getDescription(): string;
  setDescription(value: string): Expr;

  getLocation(): string;
  setLocation(value: string): Expr;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Expr.AsObject;
  static toObject(includeInstance: boolean, msg: Expr): Expr.AsObject;
  static serializeBinaryToWriter(message: Expr, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Expr;
  static deserializeBinaryFromReader(message: Expr, reader: jspb.BinaryReader): Expr;
}

export namespace Expr {
  export type AsObject = {
    expression: string,
    title: string,
    description: string,
    location: string,
  }
}

