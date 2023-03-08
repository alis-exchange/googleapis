import * as jspb from 'google-protobuf'



export class PhoneNumber extends jspb.Message {
  getE164Number(): string;
  setE164Number(value: string): PhoneNumber;

  getShortCode(): PhoneNumber.ShortCode | undefined;
  setShortCode(value?: PhoneNumber.ShortCode): PhoneNumber;
  hasShortCode(): boolean;
  clearShortCode(): PhoneNumber;

  getExtension(): string;
  setExtension(value: string): PhoneNumber;

  getKindCase(): PhoneNumber.KindCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PhoneNumber.AsObject;
  static toObject(includeInstance: boolean, msg: PhoneNumber): PhoneNumber.AsObject;
  static serializeBinaryToWriter(message: PhoneNumber, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PhoneNumber;
  static deserializeBinaryFromReader(message: PhoneNumber, reader: jspb.BinaryReader): PhoneNumber;
}

export namespace PhoneNumber {
  export type AsObject = {
    e164Number: string,
    shortCode?: PhoneNumber.ShortCode.AsObject,
    extension: string,
  }

  export class ShortCode extends jspb.Message {
    getRegionCode(): string;
    setRegionCode(value: string): ShortCode;

    getNumber(): string;
    setNumber(value: string): ShortCode;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShortCode.AsObject;
    static toObject(includeInstance: boolean, msg: ShortCode): ShortCode.AsObject;
    static serializeBinaryToWriter(message: ShortCode, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShortCode;
    static deserializeBinaryFromReader(message: ShortCode, reader: jspb.BinaryReader): ShortCode;
  }

  export namespace ShortCode {
    export type AsObject = {
      regionCode: string,
      number: string,
    }
  }


  export enum KindCase { 
    KIND_NOT_SET = 0,
    E164_NUMBER = 1,
    SHORT_CODE = 2,
  }
}

