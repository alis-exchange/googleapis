import * as jspb from 'google-protobuf'



export class Quaternion extends jspb.Message {
  getX(): number;
  setX(value: number): Quaternion;

  getY(): number;
  setY(value: number): Quaternion;

  getZ(): number;
  setZ(value: number): Quaternion;

  getW(): number;
  setW(value: number): Quaternion;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quaternion.AsObject;
  static toObject(includeInstance: boolean, msg: Quaternion): Quaternion.AsObject;
  static serializeBinaryToWriter(message: Quaternion, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quaternion;
  static deserializeBinaryFromReader(message: Quaternion, reader: jspb.BinaryReader): Quaternion;
}

export namespace Quaternion {
  export type AsObject = {
    x: number,
    y: number,
    z: number,
    w: number,
  }
}

